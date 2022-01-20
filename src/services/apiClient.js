import axiosInstance from "./axiosInstance";


export const getRequest = async (endpoint) => {
    try {
        return await axiosInstance.get(endpoint);
    }
    catch (e) {
        console.log('Api crashed: ', e);
    }
} 