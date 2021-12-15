/* eslint-disable import/no-anonymous-default-export */
export default {
	title: 'Content Section',
	name: 'content',
	type: 'object',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Page Content',
			name: 'pageContent',
			type: 'array',
			of: [
				{
					title: 'Image',
					name: 'imageBlock',
					type: 'object',
					fields: [
						{
							title: 'Title',
							name: 'title',
							type: 'blockTitle',
						},
						{
							title: 'Image',
							name: 'image',
							type: 'customImage',
						},
					],
					preview: {
						select: {
							imageUrl: 'image.asset.url',
							title: 'title',
							position: 'position',
						},
						prepare({ imageUrl, title, position }) {
							return {
								imageUrl,
								title,
								subtitle: `Position: ${position}`,
							};
						},
					},
				},
				{
					title: 'Text Content',
					name: 'textBlock',
					type: 'object',
					fields: [
						{
							title: 'Title',
							name: 'title',
							type: 'blockTitle',
						},
						{
							title: 'Display Position',
							name: 'position',
							type: 'blockPosition',
						},
						{
							title: 'Text Content',
							name: 'blocks',
							type: 'portableText',
						},
					],
					preview: {
						select: {
							title: 'title',
							position: 'position',
						},
						prepare({ title, position }) {
							return {
								title,
								subtitle: `Position: ${position}`,
							};
						},
					},
				},
			],
		},
	],
};
