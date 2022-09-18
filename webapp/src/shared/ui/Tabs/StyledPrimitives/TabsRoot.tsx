import { styled } from '@/shared/design'
import * as TabsPrimitive from '@radix-ui/react-tabs'

export const TabsRoot = styled(TabsPrimitive.Root, {
  display: 'flex',
  width: '100%',
  boxShadow: `0 2px 10px $outerSpace`,
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
  },
})
