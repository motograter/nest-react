import * as DialogPrimitive from '@radix-ui/react-dialog'
import { styled, keyframes, fadeIn, fadeOut } from '@/shared/design'

const contentShow = keyframes({
	'0%': { opacity: 0, transform: 'scale(.96)' },
	'100%': { opacity: 1, transform: 'scale(1)' },
})

export const DialogContent = styled(DialogPrimitive.Content, {
	margin: '10px 0',
	borderRadius: 4,
	minWidth: 'min-content',
	boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
	zIndex: 4325,

	variants: {
		asMenu: {
			true: {
				margin: 0,
			}
		}
	},
	'&[data-state=open]': {
		animation: `${contentShow} 300ms ease-out forwards`,
	},

	'&[data-state=close]': {
		animation: `${fadeOut} 300ms ease-out forwards`,
	},

	'&:focus': { outline: 'none' },

	// '@media (prefers-reduced-motion: no-preference)': {
	// 	animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
	// },
})