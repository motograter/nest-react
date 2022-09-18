import { createAxiosInstance } from './instance'
import { queryFn } from './queryFn'
import { AxiosRequestConfig } from 'axios'
import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes'

export const axiosBaseQuery = (baseUrl: string, api: BaseQueryApi) => {
  const axios = createAxiosInstance(baseUrl)
  axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      if (config?.headers) {
        // config.headers['Content-type'] = 'application/json'
        // const token = localStorage.getItem('access_token')
        // if (token) {
        //   config.headers['Authorization'] = `Bearer ${token}`
        // }
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )
  return queryFn(axios)
}
