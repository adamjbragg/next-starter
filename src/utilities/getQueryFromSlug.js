import { homePageQuery, jobQuery, pageQuery } from '@/data/queries';

export function getQueryFromSlug(slugArray = []) {
	const docQuery = {
		home: homePageQuery,
		page: pageQuery,
		careers: jobQuery,
	};

	// return home page
	if (slugArray.length === 0) {
		return {
			docType: 'home',
			queryParams: {},
			query: docQuery.home,
		};
	}
	// return careers page excluding the careers landing page
	if (slugArray.length > 1 && slugArray.includes('careers')) {
		return {
			docType: 'careers',
			queryParams: { slug: `/${slugArray.join('/')}` },
			query: docQuery.careers,
		};
	}

	// const [slugStart] = slugArray;

	// We now have to re-combine the slug array to match our slug in Sanity.
	const queryParams = { slug: `/${slugArray.join('/')}` };
	const docType = `page`;
	// Keep extending this section to match the slug against the docQuery object keys
	// eslint-disable-next-line no-prototype-builtins
	// if (docQuery.hasOwnProperty(slugStart)) {
	// 	docType = slugStart;
	// } else {
	// 	docType = `page`;
	// }

	return {
		docType,
		queryParams,
		query: docQuery[docType],
	};
}
