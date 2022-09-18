import React, { Children } from 'react'
import { styled, keyframes, fadeIn, fadeOut } from '@/shared/design'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { AlertDialogOverlay } from './AlertDialogOverlay'

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

const StyledContent = styled(AlertDialogPrimitive.Content, {
  background: 'linear-gradient(180deg, $athensGray, $white)',
  borderRadius: 37,
  border: '$confirmDialog',
  width: 'max-content',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 4325,

  '&[data-state=open]': {
    animation: `${contentShow} 300ms ease-out forwards`,
  },

  '&[data-state=close]': {
    animation: `${fadeOut} 300ms ease-out forwards`,
  },
  '&:focus': { outline: 'none' },

  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  variants: {
    size: {
      small: {
        maxWidth: 342,
      },
      normal: {
        maxWidth: 409,
      },
      large: {
        maxWidth: 487,
      },
    },
  },
})

export const AlertDialogContent = React.forwardRef(
  ({ container, children, dialog = true, overlay = true, size }, forwardRef) => {
    return (
      <AlertDialogPrimitive.Portal {...(container && { container: container })}>
        {overlay && <AlertDialogOverlay />}
        {dialog && (
          <StyledContent size={size} ref={forwardRef}>
            {children}
          </StyledContent>
        )}
      </AlertDialogPrimitive.Portal>
    )
  },
)
