import { lazy, Suspense } from 'react'

const Links = lazy(() =>
  import('./ui/index.view').then((module) => ({ default: module.Links }))
)
export default {
  view: () => (
    <Suspense>
      <Links />
    </Suspense>
  )
}
