import { lazy } from 'react'
import { loader, action } from './model/index.model'

const EditUser = lazy(() =>
  import('./ui/index.view').then((module) => ({ default: module.UserEdit }))
)
export default { view: () => <EditUser/>, loader, action}
