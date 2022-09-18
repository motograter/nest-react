import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '.'

type AuthState = {
  serviceDid: string
  accessToken: string
} 

const initialState: AuthState = {
  serviceDid: '',
  accessToken: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setDid: (state, action: PayloadAction<string>) => {
      state.serviceDid = action.payload
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.serviceDid = action.payload
    },
  }
})

export const { setDid, setToken } = authSlice.actions
export const selectedDid = (state: RootState): string => state.auth.serviceDid
export const selectedToken = (state: RootState): string => state.auth.accessToken