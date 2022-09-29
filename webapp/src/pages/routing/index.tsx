import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { Root } from '../root'
import { Main } from '../main'
import { NoFound } from '@/shared/layouts/NoFound'
import { usersRouteMap } from './user.route'
import { articleRouteMap } from './article.route'
import { linksRouteMap } from './links.route'
// const Main = lazy(() =>
//   import('../main').then((module) => ({ default: module.Main }))
// )

function ErrorBoundary() {
  return <h1>Error</h1>
  // const error = useRouteError()
  // console.error(error)
  // return <div>{error.statusText}</div>
}

export const routing = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        errorElement: <ErrorBoundary />,
        children: [
          {
            index: true,
            element: <Main />,
          },

          usersRouteMap,
          articleRouteMap,
          linksRouteMap,
          {
            path: '*',
            element: <NoFound />
          }
        ]
      }
    ]
  }
])

export const Routing = () => {
  return <RouterProvider router={routing} />
}
