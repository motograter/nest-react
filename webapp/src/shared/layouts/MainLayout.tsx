import { ReactComponent as Logo } from '@/shared/design/logo/logo.svg'
import { ReactNode } from 'react'
import { Heading } from '../ui'

type MainLayoutProps = {
  header: JSX.Element
  sideComponent: JSX.Element
  content?: JSX.Element
  children?: ReactNode
}
export const MainLayout = ({
  header,
  sideComponent,
  children,
  content
}: MainLayoutProps) => {
  return (
    <div className="mainLayout flex h-full flex-col ">
      <div className="flex flex-auto">
        <aside className="mainLayout-aside items-stretch flex-1 bg-[#2D3436]">
          <div className="sidebar w-56">
            <div
              className="
          flex 
          bg-[#2D3436] 
          items-center 
          flex 
          content-center 
          text-emerald-700 
          py-8
          px-4
          ">
              <Logo />
              <Heading
                headingLevel="h2"
                css={{
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  marginLeft: 10
                }}>
                Ambrella
              </Heading>
            </div>

            {sideComponent}
          </div>
        </aside>
        <main className="mainLayout-content w-full">
          {header}
          <div className=" px-4">{content}</div>
        </main>
      </div>
      <footer className="shrink-0"></footer>
    </div>
  )
}
