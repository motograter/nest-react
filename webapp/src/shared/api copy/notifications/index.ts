import { baseApi } from '../baseApi';
import { createQueries } from './query';
import { createMutations } from './mutation';

const notificationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      ...createQueries(builder.query),
      ...createMutations(builder.mutation),
    };
  },
  overrideExisting: false,
});

export const {
  useGetNotificationQuery,
  useGetNotificationsQuery,
  useCreateNotificationMutation,
  useUpdateNotificationMutation,
  useDeleteNotificationMutation,
} = notificationsApi;
