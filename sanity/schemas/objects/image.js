/* eslint-disable import/no-anonymous-default-export */
export default {
	title: 'Image',
	name: 'customImage',
	type: 'image',
	options: {
		hotspot: true,
	},
	fields: [
		{
			name: 'caption',
			type: 'string',
			title: 'Caption',
			options: {
				isHighlighted: true,
			},
		},
		{
			name: 'alt',
			type: 'string',
			title: 'Alternative text',
			description: 'Important for SEO and accessibility.',
			validation: (Rule) =>
				Rule.error('You have to fill out the alternative text.').required(),
			options: {
				isHighlighted: true,
			},
		},
	],
	preview: {
		select: {
			imageUrl: 'asset.url',
			title: 'caption',
		},
	},
};
