import { baseApi } from '../baseApi';
import { createMutations } from './mutation';
import { createQueries } from './query';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    ...createQueries(builder.query),
    ...createMutations(builder.mutation),
  }),

  overrideExisting: false,
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useLogOutMutation,
  useUpdateInvitationPasswordMutation,
  useUpdateProfilePasswordMutation,
  useCreateProfileMutation,
  useGetProfileQuery,
} = authApi;
