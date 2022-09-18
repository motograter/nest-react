import { ReactNode } from 'react'

export const TableRoot = ({ children }: { children: ReactNode }) => (
  <table
    className="
    table-auto
    w-full 
  sm:bg-white 
  rounded-lg 
  overflow-hidden 
  sm:shadow-lg my-5
  ">
    {children}
  </table>
)
