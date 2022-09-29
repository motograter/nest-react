import axios from 'axios'
import { API_URL } from '@/shared/config'
import { lazy, Suspense } from 'react'
import { Outlet, useRouteError } from 'react-router-dom'
import userEdit from '../user-edit'
import userDetails from '../user-details'

const UserList = lazy(() =>
  import('../user-list').then((module) => ({ default: module.UserList }))
)


function ErrorBoundary() {
  const error =useRouteError();
  console.error(error);
  return <div>{error.statusText}</div>;
}

export const usersRouteMap = {
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
      loader: async ({ request }) => {
        const url = new URL(request.url)
        const name = url.searchParams.get('name')
        const { data } = await axios.get(
          `${API_URL}users${!!name ? '?name=' + name : ''}`
        )
        return { users: data, name }
      }
    },
    {
      path: ':id',
      element: userDetails.view(),
      loader: userDetails.loader
    },
    {
      path: ':id/edit',
      element: userEdit.view(),
      loader: userEdit.loader,
      action: userEdit.action
    }
  ]
}
