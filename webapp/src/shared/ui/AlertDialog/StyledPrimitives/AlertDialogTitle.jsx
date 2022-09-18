import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { styled } from '@/shared/design'

export const AlertDialogTitle = styled(AlertDialogPrimitive.Title, {
  display: 'inline-flex',
  justifyContent: 'center',
  padding: '16px 0',

  fontWeight: '$fontWeights$bold',
  color: '$text',
  fontSize: 24,

  background: '$white',
  borderRadius: 37,
  boxShadow: '0 1px 18px 0 #0000000d',
})
