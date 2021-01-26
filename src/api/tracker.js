import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
    baseURL: 'http://192.168.0.104:3000'
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if(token){
            config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
    },
    (error) => {
        const err = get(error, ["response", "data", "err"]);
        return Promise.reject(err || error.message);
    }
);

export default instance;