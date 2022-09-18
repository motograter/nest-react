import { ReactComponent as Logo } from '@/shared/design/logo/logo.svg'
import { Heading } from '../ui'
export const MainLayout = ({ header, sideComponent, children, content }) => {
  return (
    <div className="mainLayout h-full flex">
      <aside className="mainLayout-aside h-full bg-[--colors-outerSpace]">
        <div className=" h-full">
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
  )
}
