import { baseApi, backendBranch, zakaBranch} from '../typicodeApi'
type Action = {
  actionId: string
}

type DtoLogin = {
  serviceDid: 'string'
  login: 'string'
  password: 'string'
}
export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    validateDid: builder.query({
      query: (did: string) => {
        return {
          method: 'GET',
          url: `${zakaBranch}/partner-services/did/${did}`,
        }
      },
    }),
    validateToken: builder.query({
      query: (did: string) => {
        return {
          method: 'GET',
          url: `${backendBranch}/service/${did}/auth/login`,
        }
      },
    }),

    logIn: builder.mutation({
      query: (data: DtoLogin) => {
        return {
          method: 'POST',
          url: `${backendBranch}/service/${data.serviceDid}/auth/login`,
          data,
        }
      },
    }),
  }),
  overrideExisting: false,
})

export const { useValidateTokenQuery, useValidateDidQuery, useLogInMutation } = authApi
