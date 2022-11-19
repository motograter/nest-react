import { Outlet, useNavigation } from 'react-router-dom'
import { MainLayout } from '@/shared/layouts'
import { NavBar } from '@/shared/ui/NavBar'
import { Header } from '@/widgets/header'
import { Loader } from '@/shared/ui'


export const Main = () => {
  const navigation = useNavigation()
  return (
    <MainLayout sideComponent={NavBar} content={}>

    </MainLayout>
  )
}
