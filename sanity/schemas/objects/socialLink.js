/* eslint-disable import/no-anonymous-default-export */
import {
	AppleLogo,
	FacebookLogo,
	InstagramLogo,
	LinkedinLogo,
	TwitchLogo,
	YoutubeLogo,
} from 'phosphor-react';

const getIcon = (icon) => {
	switch (icon) {
		case 'Apple':
			return AppleLogo;
		case 'Facebook':
			return FacebookLogo;
		case 'Instagram':
			return InstagramLogo;
		case 'LinkedIn':
			return LinkedinLogo;
		case 'Twitter':
			return TwitchLogo;
		case 'YouTube':
			return YoutubeLogo;
		default:
			return false;
	}
};

export default {
	title: 'Social Link',
	name: 'socialLink',
	type: 'object',
	options: {
		columns: 2,
		collapsible: false,
	},
	fields: [
		{
			title: 'Icon',
			name: 'icon',
			type: 'string',
			options: {
				list: [
					{ title: 'Apple', value: 'Apple' },
					{ title: 'Facebook', value: 'Facebook' },
					{ title: 'Instagram', value: 'Instagram' },
					{ title: 'LinkedIn', value: 'LinkedIn' },
					{ title: 'Twitter', value: 'Twitter' },
					{ title: 'YouTube', value: 'YouTube' },
				],
			},
		},
		{
			title: 'URL',
			name: 'url',
			type: 'url',
		},
	],
	preview: {
		select: {
			icon: 'icon',
			url: 'url',
		},
		prepare({ icon, url }) {
			return {
				title: icon,
				subtitle: url || '(url not set)',
				media: getIcon(icon),
			};
		},
	},
};
