import { ReactNode } from 'react'
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from './StyledPrimitives'

type Tab = {
  value: string
  title: string
}

type TabsProps = {
  defaultValue: string
  tabs?: Tab[]
  children?: ReactNode
  orientation: 'horizontal' | 'vertical'
  renderTabsContent?: () => ReactNode
}

export const Tabs = ({ defaultValue, orientation = 'horizontal' ,children, tabs }: TabsProps) => {
  return (
    <TabsRoot defaultValue={defaultValue} orientation={orientation}>
      <TabsList>
        {tabs?.map((tab) => (
          <TabsTrigger value={tab.value}>{tab.title}</TabsTrigger>
        ))}
      </TabsList>

      {children}
    </TabsRoot>
  )
}

Tabs.Content = TabsContent
