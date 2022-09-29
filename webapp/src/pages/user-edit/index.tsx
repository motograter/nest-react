import { lazy, Suspense } from 'react'
import { loader, action } from './model/index.model'

const EditUser = lazy(() =>
  import('./ui/index.view').then((module) => ({ default: module.UserEdit }))
)
export default {
  view: () => (
    <Suspense fallback={<h1>User Edit....</h1>}>
      <EditUser />
    </Suspense>
  ),
  loader,
  action
}
