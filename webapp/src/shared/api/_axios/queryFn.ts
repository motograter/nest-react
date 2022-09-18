import { AxiosError, AxiosInstance } from 'axios'

export const queryFn =
  (axios: AxiosInstance) =>
  async (args, { signal, dispatch, getState }, extraOptions, baseQuery) => {
    const { url, method, data, params } = args
    try {
      const result = await axios({ url: axios.getUri() + url, method, data, params })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }
