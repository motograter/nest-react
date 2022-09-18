import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { AlertDialogContent } from './StyledPrimitives/AlertDialogContent'
import { AlertDialogCancel, AlertDialogTitle } from './StyledPrimitives'

export const AlertDialog = ({
  open,
  type,
  children,
  onOpenedChange,
  styles,
  trigger,
  title,
  ...props
}) => {
  return (
    <AlertDialogPrimitive.Root
      {...(!!open && { open: open })}
      {...(!!onOpenedChange && { onOpenedChange: onOpenedChange })}
    >
      <AlertDialogPrimitive.Trigger asChild>
        {(typeof trigger === 'function' && trigger()) || trigger || null}
      </AlertDialogPrimitive.Trigger>

      <AlertDialogContent {...props}>
        {title && <AlertDialog.Title>{title}</AlertDialog.Title>}
          {children}
      </AlertDialogContent>
    </AlertDialogPrimitive.Root>
  )
}
AlertDialog.Trigger = AlertDialogPrimitive.Trigger
AlertDialog.Cancel = AlertDialogCancel
AlertDialog.Title = AlertDialogTitle
AlertDialog.Action = AlertDialogPrimitive.Action
AlertDialog.Trigger.displayName = 'AlertDialogTrigger'
