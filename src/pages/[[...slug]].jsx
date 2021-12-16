import { filterDataToSingleItem } from 'utilities/filterDataToSingleItem';
import { getQueryFromSlug } from 'utilities/getQueryFromSlug';
import dynamic from 'next/dynamic';
import { serializers } from 'utilities/serializers';
import Layout from '@/components/site-layout';
import { allPagesQuery, siteQuery } from '@/data/queries';
import { usePreviewSubscription } from '@/lib/sanity';
import { sanityClient, getClient } from '@/lib/sanity.server';

const BlockContent = dynamic(() => import('@sanity/block-content-to-react'));

const Page = function ({ site, data, preview }) {
	const { data: previewData } = usePreviewSubscription(data?.query, {
		params: data?.queryParams ?? {},
		// The hook needs to know what we started with, to return it immediately
		initialData: data?.page,
		// The passed-down preview context determines whether this function does anything
		enabled: preview,
	});
	const page = filterDataToSingleItem(previewData, preview);

	// DEBUG
	console.log('page', page);
	console.log('site', site);

	// SEO meta content need to add OG image and page description from
	const meta = {
		pageTitle: page?.title,
		pageDescription: page?.description,
	};

	if (!data || !page) return null;
	return (
		<Layout
			site={site}
			page={page}
			preview={preview}
			pageTitle={meta.pageTitle}
			pageDescription={meta.pageDescription}
		>
			<h1>{page.title}</h1>
			<BlockContent blocks={page.content} serializers={serializers} />
		</Layout>
	);
};

export default Page;

export async function getStaticPaths() {
	const pageQueries = await sanityClient.fetch(allPagesQuery);

	// Split the slug strings to arrays (as required by Next.js)
	const paths = pageQueries.map((slug) => ({
		params: { slug: slug.split('/').filter((p) => p) },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params, preview = false }) {
	const client = await getClient();
	// Fetch global content
	const site = await client.fetch(siteQuery);
	// Work out what query we should run based on this slug
	const { query, queryParams, docType } = getQueryFromSlug(params.slug);
	// Get the initial data for this page, using the correct query
	const pageData = await client.fetch(query, queryParams);
	// Helper function to reduce all returned documents down to just one
	const page = filterDataToSingleItem(pageData, preview);

	return {
		props: {
			// Pass-down the preview context
			preview,
			site,
			data: { query, queryParams, docType, page },
		},
	};
}
