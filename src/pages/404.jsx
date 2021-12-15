import Layout from '@/components/layout';

const FourOhFour = function ({ site }) {
	const meta = {
		pageTitle: '404',
		pageDescription: 'page not found',
	};

	return (
		<Layout
			site={site}
			pageTitle={meta.pageTitle}
			pageDescription={meta.pageDescription}
		>
			<h1>404</h1>
			<p>Page Not Found</p>
		</Layout>
	);
};

export default FourOhFour;
