import axios from 'axios'
import { API_URL } from '@/shared/config'
import { lazy, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { loader as userDetailsLoader } from '../user-details'
import userEdit from '../user-edit'

const UserList = lazy(() =>
  import('../user-list').then((module) => ({ default: module.UserList }))
)

const User = lazy(() =>
  import('../user-details').then((module) => ({ default: module.User }))
)

export const usersMapRoute = {
  path: 'users',
  element: <Outlet />,
  children: [
    {
      element: (
        <Suspense fallback={<h1>USER LIST LOADING</h1>}>
          <UserList />
        </Suspense>
      ),
      index: true,
      errorElement: <h1>Error</h1>,
      loader: async () => {
        return await axios.get(`${API_URL}users`)
      }
    },
    {
      path: ':id',
      element: <User />,
      loader: userDetailsLoader
    },
    {
      path: ':id/edit',
      element: userEdit.view(),
      loader: userEdit.loader,
      action: userEdit.action
    }
  ]
}
