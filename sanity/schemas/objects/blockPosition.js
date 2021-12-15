export default {
	title: 'Position',
	name: 'blockPosition',
	type: 'string',
	options: {
		initialValue: 'left',
		list: [
			{ title: 'Full Width', value: 'fullWidth' },
			{ title: 'Left', value: 'left' },
			{ title: 'Right', value: 'right' },
		],
	},
	initialValue: 'left',
	hidden: ({ parent }) => parent?.columns === 1,
};
