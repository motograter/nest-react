import { baseApi } from '../baseApi';
import { createQueries } from './query';
import { createMutations } from './mutation';

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      ...createQueries(builder.query),
      ...createMutations(builder.mutation),
    };
  },
  overrideExisting: false,
});

export const {
  useCreateUserMutation,
  useRemoveUserMutation,
  useUpdateUserMutation,
  useDeleteNotificationByTokenMutation,
  useGetNotificationByTokenMutation,
  useGetUsersQuery,
  useGetUserQuery,
  useGetUsersStatsQuery,
} = usersApi;
