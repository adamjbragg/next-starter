import Link from 'next/link';

import {
	AppleLogo,
	FacebookLogo,
	InstagramLogo,
	LinkedinLogo,
	TwitterLogo,
	YoutubeLogo,
} from 'phosphor-react';

const SocialLinks = function ({
	socialLinks,
	heading,
	labelSize = 'text-base',
	iconSize = '18',
}) {
	const getIcon = (icon) => {
		switch (icon) {
			case 'Apple':
				return <AppleLogo size={iconSize} weight="fill" />;
			case 'Facebook':
				return <FacebookLogo size={iconSize} weight="fill" />;
			case 'Instagram':
				return <InstagramLogo size={iconSize} weight="fill" />;
			case 'LinkedIn':
				return <LinkedinLogo size={iconSize} weight="fill" />;
			case 'Twitter':
				return <TwitterLogo size={iconSize} weight="fill" />;
			case 'YouTube':
				return <YoutubeLogo size={iconSize} weight="fill" />;
			default:
				return false;
		}
	};

	return (
		<div className="space-y-5">
			{heading && <h3>{heading}</h3>}
			<ul className="space-y-3">
				{socialLinks?.map((socialLink) => (
					<li className="flex flex-row items-center" key={socialLink._key}>
						<Link href={socialLink.url}>
							<a className="flex items-center space-x-1 ">
								{getIcon(socialLink.icon)}
								<span className={labelSize}>{socialLink.icon}</span>
							</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SocialLinks;
