import axios from 'axios'

export const createAxiosInstance =  (baseUrl: string) => axios.create({
    baseURL: baseUrl,
    withCredentials: true,
})