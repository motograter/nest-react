import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {baseApi} from 'shared/api/baseApi'

type AuthState = {
  serviceDid: string
  accessToken: string
  user: null
}

const initialState: AuthState = {
  serviceDid: '',
  accessToken: '',
  user: null,
}

const reducerPath = 'auth'

const slice = createSlice({
  name: reducerPath,
  initialState,
  reducers: {
    setDid: (state, action: PayloadAction<string>) => {
      state.serviceDid = action.payload
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.serviceDid = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      baseApi.endpoints.validateToken.matchFulfilled,
      (state, { payload }) => {
        state.user = payload
      }
    )
  },
})

export const { setDid, setToken } = slice.actions
export const reducers = { [reducerPath]: slice.reducer }
