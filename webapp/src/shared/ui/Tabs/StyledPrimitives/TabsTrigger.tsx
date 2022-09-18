import { styled } from '@/shared/design'
import * as TabsPrimitive from '@radix-ui/react-tabs'

export const TabsTrigger = styled(TabsPrimitive.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  backgroundColor: 'white',
  padding: '0 20px',
  maxWidth: 200,
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 15,
  lineHeight: 1,
  userSelect: 'none',

  '&[data-orientation="vertical"]': {
    justifyContent: 'flex-start',
    borderBottomLeftRadius: '$2',
    borderBottomColor: 'transparent',
    '&:last-child': { borderTopRightRadius: 0 },
    '&:first-child': { borderTopLeftRadius: 0 },
  },

  '&:first-child': { borderTopLeftRadius: 6 },
  '&:last-child': { borderTopRightRadius: 6 },
  '&:hover': { color: 'violet' },

  '&[data-state="active"]': {
    color: 'violet',
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px black` },
})
