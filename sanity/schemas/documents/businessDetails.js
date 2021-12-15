/* eslint-disable import/no-anonymous-default-export */
export default {
	name: 'businessDetails',
	title: 'Business Details',
	__experimental_actions: ['create', 'update', /* 'delete', */ 'publish'],
	type: 'document',
	fields: [
		{
			name: 'nameDefinition',
			title: 'Name Definition',
			type: 'simplePortableText',
		},
		{
			name: 'generalEmail',
			title: 'General Email',
			type: 'string',
		},
		{
			name: 'phone',
			title: 'Phone',
			type: 'string',
		},
		{
			name: 'contactAddress',
			title: 'Contact Address',
			type: 'simplePortableText',
		},
		{
			name: 'postalAddress',
			title: 'Postal Address',
			type: 'simplePortableText',
		},
		{
			title: 'Company Social Links',
			name: 'social',
			type: 'array',
			of: [{ type: 'socialLink' }],
		},
	],
};
