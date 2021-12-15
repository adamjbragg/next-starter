/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import link from './link';

const largeRender = (props) => (
	<span style={{ fontSize: '24px' }}>{props.children}</span>
);

export default {
	title: 'Simple Portable Text',
	name: 'simplePortableText',
	type: 'array',
	of: [
		{
			title: 'Block',
			type: 'block',
			styles: [
				{ title: 'Normal', value: 'normal' },
				{
					title: 'Large',
					value: 'large',
					blockEditor: {
						render: largeRender,
					},
				},
			],
			lists: [],
			marks: {
				annotations: [link],
				decorators: [
					{ title: 'Strong', value: 'strong' },
					{ title: 'Emphasis', value: 'em' },
				],
			},
		},
	],
};
