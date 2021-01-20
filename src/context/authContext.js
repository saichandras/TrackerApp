import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import {AsyncStorage} from "react-native";
import {navigate} from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'signin':
            return {errorMessage: '', token: action.payload};
        case 'add_error':
            return {...state, errorMessage: action.payload};
        default:
            return state;
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
        dispatch({type: 'add_error', payload: 'Something went wrong with Sign Up'});
    }
};


const signin = (dispatch) => async ({email, password}) => {
    try {
        const response = await trackerApi.post('/signin', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signin', payload: response.data.token});
        navigate('TrackList');
    } catch (err) {
        dispatch({type: 'add_error', payload: 'Something went wrong with Sign In'});
    }
};


const signout = (dispatch) => {
    return () => {

    };
};


export const {Context, Provider} = createDataContext(
    authReducer,
    {signup, signin, signout},
    {token: null, errorMessage: ''}
);