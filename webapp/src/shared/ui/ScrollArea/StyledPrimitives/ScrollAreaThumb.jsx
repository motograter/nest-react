import { styled } from '@/shared/design'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'

const SCROLLBAR_SIZE = 5
/* It's setting the width, maxHeight, and borderRadius of the scroll area. */

export const ScrollAreaThumb = styled(ScrollAreaPrimitive.Thumb, {
	flex: 1,
	background: '$outerSpace',
	borderRadius: SCROLLBAR_SIZE,
	position: 'relative',
	'&::before': {
		content: '""',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '100%',
		height: '100%',
		minWidth: 44,
		minHeight: 44,
	},
})
