import * as DialogPrimitive from '@radix-ui/react-dialog'
import { styled, fadeIn, fadeOut } from '@/shared/design'

export const DialogOverlay = styled(DialogPrimitive.Overlay, {
  inset: 0,
  background: 'rgba(0 0 0 / 0.5)',
  position: 'fixed',
  zIndex: 1300,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'grid',
  placeItems: 'center',
  overflowY: 'auto',

  variants: {
    alignContent: {
      left: {
        placeItems: 'start',
        overflowY: 'hidden'
      },
      right: {
        placeItems: 'end',
        overflowY: 'hidden'
      },
    }
  },
  '&[data-state=open]': {
    animation: `${fadeIn} 300ms ease-out forwards`,
  },
  '&[data-state=close]': {
    animation: `${fadeOut} 300ms ease-out forwards`,
  },

})
