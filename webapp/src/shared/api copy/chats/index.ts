import { baseApi } from '../baseApi';
import { createQueries } from './query';
import { createMutations } from './mutation';

const chatsApi = baseApi.injectEndpoints({
  endpoints: (builder) => {
    return {
      ...createQueries(builder.query),
      ...createMutations(builder.mutation),
    };
  },
  overrideExisting: false,
});

export const {
  useGetChatsQuery,
  useGetChatMessagesQuery,
  useCreateChatGroupMutation,
  useGetChatPersonalMutation,
  useDeleteChatMutation,
} = chatsApi;
