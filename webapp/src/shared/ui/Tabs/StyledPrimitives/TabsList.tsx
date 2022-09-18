import { styled } from '@/shared/design'
import * as TabsPrimitive from '@radix-ui/react-tabs'

export const TabsList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex',
  borderBottom: `1px solid $geyser`,
  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    boxShadow: 'inset -1px 0 0 $slate6',
  },
})
