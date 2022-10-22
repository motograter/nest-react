import { styled } from '@/shared/design'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'

const SCROLLBAR_SIZE = 5

export const ScrollAreaScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
	display: 'flex',
	// ensures no selection
	userSelect: 'none',
	// disable browser handling of all panning and zooming gestures on touch devices
	touchAction: 'none',
	padding: 2,
	backgroundColor: '$gray',
	height: '100%',
	borderTopRightRadius: 3,
	borderBottomRightRadius: 3,
	transition: 'backgroundColor 160ms ease-out',
	// '&:hover': { background: '$salem' },
	'&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
	'&[data-orientation="horizontal"]': {
		flexDirection: 'column',
		height: SCROLLBAR_SIZE,
	},
})
