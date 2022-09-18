import { styled } from '@/shared/design'

export const FlexBox = styled('div', {
	display: 'flex',
	variants: {
		wrap: {
			wrap: {
				flexWrap: 'wrap',
			},
			'no-wrap': {
				flexWrap: 'nowrap',
			},
			'wrap-reverse': {
				flexWrap: 'wrap-reverse',
			},
		},
		flow: {
			row: {
				flexDirection: 'row',
			},
			column: {
				flexDirection: 'column',
			},
			'row-reverse': {
				flexDirection: 'row-reverse',
			},
			'column-reverse': {
				flexDirection: 'column-reverse',
			},
		},
		main: {
			start: {
				justifyContent: 'flex-start',
			},
			right: {
				justifyContent: 'right',
			},
			left: {
				justifyContent: 'left',
			},
			center: {
				justifyContent: 'center',
			},
			end: {
				justifyContent: 'flex-end',
			},
			stretch: {
				justifyContent: 'stretch',
			},
			'space-between': {
				justifyContent: 'space-between',
			},
			'space-around': {
				justifyContent: 'space-around',
			},
			'space-evenly': {
				justifyContent: 'space-evenly',
			},
		},
		cross: {
			start: {
				alignItems: 'flex-start',
			},
			center: {
				alignItems: 'center',
			},
			end: {
				alignItems: 'flex-end',
			},
			stretch: {
				alignItems: 'stretch',
			},
		},
		my: {
			'sm-10': {
				gap: '10px 0',
			}
		},
		mx: {
			'sm-10': {
				gap: '0 10px',
			}
		},
		gap: {
			none: {
				gap: 0,
			},
			sm: {
				gap: '4px',
			},
			md: {
				gap: '8px',
			},
			lg: {
				gap: '20px 30px',
			},
		},
		display: {
			flex: {
				display: 'flex',
			},
			inline: {
				display: 'inline-flex',
			},
		},

		bgColor: {
			white: {
				backgroundColor: 'white'
			}
		}
	},
})

