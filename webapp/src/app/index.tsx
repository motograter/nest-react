import { withProviders } from './providers'
import { Routing } from '@/pages/routing'
import './App.css'
import { globalStyles } from '@/shared/design'

const App = () => {
  globalStyles()
  return <Routing />
}

export default withProviders(App)
