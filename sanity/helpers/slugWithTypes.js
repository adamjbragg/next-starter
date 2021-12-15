import slugify from 'slugify';

function formatSlug(input, slugStart) {
	const slug = slugify(input, { lower: true });
	return slugStart + slug;
}

export function slugWithType(prefix = ``, slugEnd = `title`) {
	const slugStart = prefix ? `/${prefix}/` : `/`;

	const source = slugEnd;

	return {
		name: `slug`,
		type: `slug`,
		options: {
			source,
			slugify: (value) => formatSlug(value, slugStart),
		},
		validation: (Rule) =>
			Rule.required().custom(({ current }) => {
				if (typeof current === 'undefined') {
					return true;
				}

				if (current) {
					if (!current.startsWith(slugStart)) {
						return `Slug must begin with "${slugStart}". Click "Generate" to reset.`;
					}

					if (current.slice(slugStart.length).split('').includes('/')) {
						return `Slug cannot have another "/" after "${slugStart}"`;
					}

					if (current === slugStart) {
						return `Slug cannot be empty`;
					}

					if (current.endsWith('/')) {
						return `Slug cannot end with "/"`;
					}
				}

				return true;
			}),
	};
}
