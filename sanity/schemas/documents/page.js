/* eslint-disable import/no-anonymous-default-export */
import { slugWithType } from '../../helpers/slugWithTypes';

export default {
	name: 'page',
	type: 'document',
	title: 'Pages',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
			validation: (Rule) => Rule.required(),
		},
		slugWithType(``, `title`),
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
