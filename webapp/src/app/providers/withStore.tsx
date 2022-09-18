import { store } from '../store'
import { Provider } from 'react-redux'

export const withStore = (Сomponent: any) => ()=>
  <Provider store={store}><Сomponent/></Provider>
