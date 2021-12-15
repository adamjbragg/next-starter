import { allSlugsQuery } from '@/data/queries';
import { sanityClient } from '@/lib/sanity.server';

const SiteMap = function () {
	return <div>loading</div>;
};

export async function getServerSideProps({ res }) {
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
	const urls = await sanityClient.fetch(allSlugsQuery);
	const slugs = urls.map(
		(page) =>
			`
      <loc>${baseUrl}${page.replace('/', '')}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    `
	);

	const locations = [...slugs];
	const createSitemap = () => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${locations.map((location) => `<url> ${location}</url>`).join('')}
    </urlset>
    `;
	res.setHeader('Content-Type', 'text/xml');
	res.write(createSitemap());
	res.end();
	return {
		props: {},
	};
}

export default SiteMap;
