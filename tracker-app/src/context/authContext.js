import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import trackerApi from '../api/tracker';
import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return { token: action.payload };
    case 'signout':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};

const tryLocalSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token });
  }
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });
    } catch (err) {
      console.log(err);
      Toast.show({
        type: 'error',
        text1: 'Sign Up Unsuccessfull',
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    email = email.trim();
    try {
      const response = await trackerApi.post('/signin', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Sign In Unsuccessfull',
      });
    }
  };

const signout = (dispatch) => async () => {
  try {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
  } catch (err) {
    Toast.show({
      type: 'error',
      text1: 'Sign Out Error',
    });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, tryLocalSignIn, signout },
  { token: null },
);
