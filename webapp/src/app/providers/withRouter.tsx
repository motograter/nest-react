import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { routing } from '@/pages/routing'

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <RouterProvider router={routing}>
      <Suspense fallback={<></>}>{component()}</Suspense>
    </RouterProvider>
  )
