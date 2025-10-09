import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const baseURL =
  Platform.OS === 'ios' ? 'http://127.0.0.1:3000' : 'http://10.0.2.2:3000';

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    const err = get(error, ['response', 'data', 'err']);
    return Promise.reject(err || error.message);
  },
);

export default instance;
