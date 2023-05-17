import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { loginUserState } from '../../atom/login/LoginAtom';

const axiosInstance  = axios.create({
    baseURL: `http://localhost:8080`,
    headers: {"Content-Type": "application/json"}
});

axiosInstance.interceptors.request.use(
    
    async (request) => {
        let accessToken = Cookies.get('accessToken');
        const refreshToken = Cookies.get('refreshToken');
        const { username } = useRecoilValue(loginUserState);


        if(accessToken === null) {
            const option = {
                headers : {
                    "Content-Type" : "application/json"
                }
            }

            const refreshInfo = {
                "username" : username,
                "refreshToken" :  refreshToken
            }
            const response = await axios.post("http://localhost:8080/api/auth/refresh", JSON.stringify(refreshInfo), option);
            accessToken = response.data.accessToken;
            Cookies.set('accessToken', accessToken, { expires: 1 / 24 });
        }

        request.headers.Authorization = `Bearer ${accessToken}`

        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);


    

export default axiosInstance;