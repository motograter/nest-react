import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { BASE_URL } from '@/shared/config/env.config'
import { BaseQueryApi, BaseQueryExtraOptions } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import { axiosBaseQuery } from './_axios'

const customBaseQuery = async (
  args: FetchArgs,
  api: BaseQueryApi,
  extraOptions: BaseQueryExtraOptions<any>,
  baseQuery: BaseQueryApi,
) => {
  const baseResult = await axiosBaseQuery(BASE_URL, api)(args, api, extraOptions, baseQuery)
  return baseResult
}

export const typicodeApi = createApi({
  reducerPath: 'api',
  baseQuery: customBaseQuery,
  tagTypes: ['Users', 'Posts', ],
  endpoints: () => ({}),
})
