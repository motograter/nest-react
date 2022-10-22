/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { FetchArgs } from '@reduxjs/toolkit/dist/query';
import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { AxiosError, AxiosInstance } from 'axios';

export const queryFn =
  (axios: AxiosInstance) =>
  async (
    args: FetchArgs,
    { signal, dispatch, getState }: BaseQueryApi,
    extraOptions,
    baseQuery: BaseQueryApi,
  ) => {
    const { url, method, data, params, headers } = args;
    try {
      const result = await axios({
        url: axios.getUri() + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
