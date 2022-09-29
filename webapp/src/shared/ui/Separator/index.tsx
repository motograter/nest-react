import { styled } from '@/shared/design'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

export const Separator = styled(SeparatorPrimitive.Root, {
  '&[data-orientation=horizontal]': { height: 2, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 2 },
  variants: {
    color: {
      tuna: { backgroundColor: '$tuna' }
    },
  },
  defaultVariants: {
    color: 'tuna',
  }
})
