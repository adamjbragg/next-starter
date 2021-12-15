/* eslint-disable import/no-anonymous-default-export */
export default {
	title: 'Menu',
	name: 'menu',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			hidden: true,
		},
		{
			title: 'Nav Items',
			name: 'items',
			type: 'array',
			of: [{ type: 'navPage' }, { type: 'navLink' }],
		},
	],
	preview: {
		select: {
			title: 'title',
			items: 'items',
		},
		prepare({ title = 'Untitled', items = [] }) {
			return {
				title,
				subtitle: `${items.length} link(s)`,
			};
		},
	},
};
