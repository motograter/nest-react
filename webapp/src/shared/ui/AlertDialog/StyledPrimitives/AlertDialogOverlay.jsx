import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { styled, fadeIn, fadeOut } from '@/shared/design'

export const AlertDialogOverlay = styled(AlertDialogPrimitive.Overlay, {
	/* The overlay that is covering the whole screen. */
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
	overflowY: 'hidden',
	'&[data-state=open]': {
		animation: `${fadeIn} 300ms ease-out forwards`,
	},
	'&[data-state=close]': {
		animation: `${fadeOut} 300ms ease-out forwards`,
	},
	// '@media (prefers-reduced-motion: no-preference)': {
	// 	animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
	// },
})
