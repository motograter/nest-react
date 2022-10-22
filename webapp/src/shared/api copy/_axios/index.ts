import { createAxiosInstance } from './instance';
import { queryFn } from './queryFn';
import { AxiosRequestConfig } from 'axios';
import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import * as SignIn from 'pages/SignIn/slice';

export const axiosBaseQuery = (baseUrl: string, api: BaseQueryApi) => {
  const axios = createAxiosInstance(baseUrl);
  const { dispatch } = api;
  axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      if (config?.headers) {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  axios.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;

      if (originalConfig.url.includes('/auth/refresh-tokens') && err.response) {
        dispatch(SignIn.actions.setIsLogged(false));
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        return;
      }

      if (!originalConfig.url.includes('/auth/signin') && err.response) {
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
          try {
            const rs = await axios.post(axios.getUri() + 'auth/refresh-tokens', {
              refreshToken: localStorage.getItem('refreshToken'),
            });
            const { token, refreshToken } = rs.data;
            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);
            return axios(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }

      return Promise.reject(err);
    },
  );
  return queryFn(axios);
};
