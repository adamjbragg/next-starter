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
							title: 'Text Content',
							name: 'blocks',
							type: 'portableText',
						},
					],
				},
			],
		},
	],
};
