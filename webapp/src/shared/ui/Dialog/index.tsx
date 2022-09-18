import * as DialogPrimitive from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import { DialogContent} from './StyledPrimitives'

type DialogProps = {
  open?: boolean
  children?: ReactNode
  renderTrigger?: () => ReactNode
  onOpenChange?: () => void
  id?: string
  modal?: boolean
  alignContent?: string
  asMenu?: boolean
  pointerDownOutside?: boolean
}

export const Dialog = ({
  id,
  open,
  children,
  renderTrigger,
  onOpenChange,
  ...props
}: DialogProps) => {
  return (
    <DialogPrimitive.Root
      {...(id && { id: id })}
      {...(open !== undefined && { open: open })}
      {...(typeof onOpenChange === 'function' && { onOpenChange: onOpenChange })}
    >
      <DialogPrimitive.Trigger asChild>{renderTrigger?.()}</DialogPrimitive.Trigger>

      <DialogContent {...props}>{children}</DialogContent>
    </DialogPrimitive.Root>
  )
}

Dialog.Close = DialogPrimitive.Close
Dialog.Trigger = DialogPrimitive.Trigger
Dialog.Content = DialogPrimitive.Content
Dialog.Portal = DialogPrimitive.Portal
Dialog.Overlay = DialogPrimitive.Overlay

