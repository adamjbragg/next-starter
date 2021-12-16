/* eslint-disable import/no-anonymous-default-export */

export default {
	name: 'homePage',
	type: 'document',
	title: 'Home Page',
	// __experimental_actions: ['create', 'update', /* 'delete', */ 'publish'],
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
			// hidden: true,
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			// hidden: true,
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			name: 'description',
			type: 'text',
			title: 'SEO Description',
			description:
				'This description populates meta-tags on the webpage. If your stuck on what to write, grab a sentance or two from the pages written content.',
			validation: (Rule) => Rule.required(),
		},
	],
};
