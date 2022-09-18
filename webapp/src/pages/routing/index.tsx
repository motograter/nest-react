import { lazy, Suspense } from 'react'
import { createBrowserRouter, Outlet, useRouteError } from 'react-router-dom'
import { usersMapRoute } from './user.route'

const Main = lazy(() =>
  import('../main').then((module) => ({ default: module.Main }))
)

function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return <div>{error.statusText}</div>;
}

export const routing = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback={<h1>Loading</h1>}><Main /></Suspense>,
    errorElement: <ErrorBoundary/>,
    children: [
      usersMapRoute,
    ]
  }
])
