/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import link from './link';

const largeRender = (props) => (
	<span style={{ fontSize: '24px' }}>{props.children}</span>
);

export default {
	title: 'Portable Text',
	name: 'portableText',
	type: 'array',
	of: [
		{
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
				{ title: 'H1', value: 'h1' },
				{ title: 'H2', value: 'h2' },
				{ title: 'H3', value: 'h3' },
				{ title: 'H4', value: 'h4' },
			],
			marks: {
				annotations: [link],
			},
		},
	],
};
