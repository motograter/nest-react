import { typicodeApi } from '../typicodeApi'

type Action = {
  actionId: string
}

export const actionApi = typicodeApi.injectEndpoints({
  endpoints: (builder) => {
    const did = localStorage.getItem('service_did')
    return {
      getUsers: builder.query({
        query: ()=> ({
          method: 'GET',
          url: 'users'
        }),
        providesTags: (result = []): any => {
          return [
            ...result.map(({ actionId }: Action) => ({ type: 'Users', actionId } as const)),
            { type: 'Users' as const, id: 'LIST' },
          ]
        },
      }),

      // updateAction: builder.mutation<any, any>({
      //   query: (action): any => {
      //     const url = `/service/${did}/config/action/${action.actionId}`
      //     return {
      //       method: 'PUT',
      //       url,
      //       data: action,
      //     }
      //   },
      //   invalidatesTags: (action) => [{ type: 'Actions', id: action?.id }],
      // }),

      // getActionInstance: builder.query({
      //   query: (actionId) => {
      //     return {
      //       method: 'GET',
      //       url: `/service/${did}/config/action-instance?actionId=${actionId}`,
      //     }
      //   },
      //   providesTags: (_: any, actionId: any) => [{ type: 'Actions', actionId }],
      // }),
    }
  },
  overrideExisting: false,
})

export const {
  useGetUsersQuery,
  util,
} = actionApi
