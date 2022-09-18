import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { typicodeApi } from '@/shared/api/typicodeApi'
import { authSlice } from '@/app/store/authSlice'

export const store = configureStore({
  reducer: {
    [typicodeApi.reducerPath]: typicodeApi.reducer,
    // [authSlice.name]: authSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(typicodeApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector