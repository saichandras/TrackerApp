import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
//import {AsyncStorage} from "react-native";
import {navigate} from "../navigationRef";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {showMessage} from "react-native-flash-message";
import {Text, View} from 'react-native';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'signout':
            return {token: null, errorMessage: ''}
        case 'clear_error_msg':
            return {...state, errorMessage: ''};
        case 'signin':
            return {errorMessage: '', token: action.payload};
        case 'add_error':
            return {...state, errorMessage: action.payload};
        default:
            return state;
    }
};

const tryLocalSignIn = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({type: 'signin', payload: token});
        navigate('TrackList');
    } else {
        navigate('Signup');
    }
};


const signup = (dispatch) => async ({email, password}) => {
    try {
        const response = await trackerApi.post('/signup', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signin', payload: response.data.token});
        //Navigate after successful token
        navigate('TrackList');
    } catch (err) {
        //dispatch({type: 'add_error', payload: 'Something went wrong with Sign Up'});
        showMessage({
            icon: 'auto',
            message: "Sign Up Error",
            description: "Something went wrong with Sign Up",
            type: "danger",
        });
    }
};


const signin = (dispatch) => async ({email, password}) => {
    try {
        const response = await trackerApi.post('/signin', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signin', payload: response.data.token});
        navigate('TrackList');
    } catch (err) {
        //dispatch({type: 'add_error', payload: 'Something went wrong with Sign In'});
        showMessage({
            icon: 'auto',
            message: "Sign In Error",
            description: "Something went wrong with Sign In",
            type: "danger",
        });
    }
};


const signout = (dispatch) => async () => {
    try {
        await AsyncStorage.removeItem('token');
        dispatch({type: 'signout'});
        navigate('loginFlow');
    }catch(err){

    }
};


const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_msg'});
};


export const {Context, Provider} = createDataContext(
    authReducer,
    {signup, signin, signout, clearErrorMessage, tryLocalSignIn},
    {token: null, errorMessage: ''}
);