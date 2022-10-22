import { baseApi } from '../baseApi';

const initApi = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      getDBstatus: builder.query({
        query: () => ({
          method: 'GET',
          url: 'status',
        }),
      }),
    };
  },
  overrideExisting: false,
});

export const { useGetDBstatusQuery } = initApi;
