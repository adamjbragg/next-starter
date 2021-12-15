import BlockContent from '@sanity/block-content-to-react';

export const serializers = {
	list: (props) => (
		<ul className="pl-5 list-disc space-y-4 mb-8 last-of-type:mb-0">
			{props.children}
		</ul>
	),
	listItem: (props) => <li>{props.children}</li>,
	types: {
		block: (props) => {
			const { style = 'normal' } = props.node;

			if (style === 'large') {
				return (
					<p className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
						{props.children}
					</p>
				);
			}

			// Fall back to default handling
			return BlockContent.defaultSerializers.types.block(props);
		},
	},
	marks: {
		link: ({ children, mark }) => {
			if (mark.linkType === 'internal') {
				return <a href={`/${mark.internalLink.slug}`}>{children}</a>;
			}
			if (mark.linkType === 'external' && mark.blank) {
				return (
					<a href={mark.href} target="_blank" rel="noreferrer">
						{children}
					</a>
				);
			}
			if (mark.linkType === 'external') {
				return <a href={mark.href}>{children}</a>;
			}
		},
	},
};
