import Layout from '@/components/site-layout';

const Home = function () {
	const meta = {
		pageTitle: 'Home',
		pageDescription: 'Page description',
	};

	return (
		<Layout pageTitle={meta.pageTitle} pageDescription={meta.pageDescription}>
			<h1>AJB Next.js starter!</h1>
			<p>Content will live here.</p>
		</Layout>
	);
};

export default Home;
