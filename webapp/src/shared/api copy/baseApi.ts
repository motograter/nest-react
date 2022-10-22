import { createApi } from '@reduxjs/toolkit/query/react';
import type { FetchArgs } from '@reduxjs/toolkit/query';
import { BaseQueryApi, BaseQueryExtraOptions } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { isRejectedWithValue, MiddlewareAPI, Middleware, isFulfilled } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { axiosBaseQuery } from './_axios';

const customBaseQuery = async (
  args: FetchArgs,
  api: BaseQueryApi,
  extraOptions: BaseQueryExtraOptions<any>,
  baseQuery: BaseQueryApi,
) => {
  const baseResult = await axiosBaseQuery(process.env.REACT_APP_API_URL || '', api)(
    args,
    api,
    extraOptions,
    baseQuery,
  );
  return baseResult;
};

export const baseApi = createApi({
  reducerPath: 'api',
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  baseQuery: customBaseQuery,
  tagTypes: ['User', 'Document', 'Chat', 'Notification'],
  endpoints: () => ({}),
});

export const rtkQueryErrorLogger: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    console.warn(action, 'We got a rejected action!');
    toast(action.payload?.data?.message[0]);
  }

  return next(action);
};
