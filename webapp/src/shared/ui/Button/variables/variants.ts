export const variants = {
	none: {
		$$background: 'transparent',
		backgroundColor: '$$color',
		$$textColor: '$colors$text',
		border: '1px solid $gray',
	},

	red: {
		backgroundColor: '$red',
		border: '1px solid $red',
		'&:hover': {
			backgroundColor: '#d54040',
		},
	},

	blue: {
		backgroundColor: '#5196CF',
		border: '1px solid #5196CF',
		color: '$white',
		'&:hover': {
			backgroundColor: '#75b2e4',
		},
	},
	green: {
		backgroundColor: '$salem',
		border: '1px solid $salem',
		color: '$white',
		'&:hover': {
			backgroundColor: '$mountainMeadow',
		},
	},

	gray: {
		backgroundColor: '$outerSpace',
		border: '1px solid $geyser',
		color: '$sharkS8L20',
		'&:hover': {
			backgroundColor: '$boulder',
		},
	},

}
