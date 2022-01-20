import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

axiosInstance.interceptors.request.use(config => {
    config.params = {
        app_id: "abc"
    };
    return config;
});

export default axiosInstance;