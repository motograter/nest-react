export const MainLayout = ({ header, sideComponent, children, content }) => {
  return (
    <div className="mainLayout h-full flex">
      
      <aside className="mainLayout-aside">
        <div className="container">{sideComponent}</div>
      </aside>
      <main className="mainLayout-content w-full">
        {header}
        <div className=" px-4">{content}</div>
      </main>
    </div>
  )
}
