import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from 'utils/constants';

export const createAxiosInstance = (baseUrl: string) =>
  axios.create({
    baseURL: baseUrl,
    withCredentials: true,
  });

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
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
