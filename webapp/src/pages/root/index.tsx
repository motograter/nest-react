import { NavBar } from '@/shared/ui/NavBar'
import { Header } from '@/widgets/header'
import { MainLayout } from '@/shared/layouts'
import { Loader } from '@/shared/ui'
import { Outlet, useNavigation } from 'react-router-dom'

export const Root = () => {
  const navigation = useNavigation()


  return (
    <>
    
   

      <MainLayout
        header={<Header />}
        sideComponent={ <NavBar />}
        content={<Outlet />}>
        {navigation.state === 'loading' && <Loader />}
      </MainLayout>
    </>
  )
}
