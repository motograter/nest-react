import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { styled } from '@/shared/design'

export const AlertDialogDescription = styled(AlertDialogPrimitive.Description, {
	textAlign: 'center',
	marginBottom: 20,
	color: '$text',
	fontSize: 15,
	lineHeight: 1.5,
})
