import { homePageQuery, pageQuery } from '@/data/queries';

export function getQueryFromSlug(slugArray = []) {
	const docQuery = {
		home: homePageQuery,
		page: pageQuery,
	};

	// return home page
	if (slugArray.length === 0) {
		return {
			docType: 'home',
			queryParams: {},
			query: docQuery.home,
		};
	}

	// const [slugStart] = slugArray;

	// We now have to re-combine the slug array to match our slug in Sanity.
	const queryParams = { slug: `/${slugArray.join('/')}` };
	const docType = `page`;

	return {
		docType,
		queryParams,
		query: docQuery[docType],
	};
}
