import * as DialogPrimitive from '@radix-ui/react-dialog'
import { ElementRef, forwardRef, ReactNode } from 'react'
import { DialogOverlay } from './DialogOverlay'
import { DialogContent as StyledContent } from './DialogContent'

type Ref = ElementRef<typeof DialogPrimitive.Content>

type DialogContentProps = {
  children?: ReactNode
  alignContent?: any
  asMenu?: boolean
  pointerDownOutside?: boolean
}
export const DialogContent = forwardRef<Ref, DialogContentProps>(
  ({ children, alignContent='', pointerDownOutside , ...props }, forwardedRef) => {

    return (
      <DialogPrimitive.Portal>
        <DialogOverlay alignContent={alignContent} className="dialog__overlay">
          <StyledContent
            onPointerDownOutside={(e) => !pointerDownOutside && e.preventDefault()}
            {...props}
            ref={forwardedRef}
          >
            {children}
          </StyledContent>
        </DialogOverlay>
      </DialogPrimitive.Portal>
    )
  },
)
