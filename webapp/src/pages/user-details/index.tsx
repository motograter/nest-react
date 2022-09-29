import { lazy, Suspense } from 'react'
import { loader, } from './model/index.model'

const User = lazy(() =>
  import('./ui/index.view').then((module) => ({ default: module.User}))
)
export default {
  view: () => (
    <Suspense>
      <User />
    </Suspense>
  ),
  loader,
}
