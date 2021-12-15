/* eslint-disable react/jsx-props-no-spreading */
import '../styles/global.css';
import { useEffect } from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

const App = function ({ Component, pageProps, router }) {
	useEffect(() => {
		const handleRouteChange = (url) => {
			window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
				page_path: url,
			});
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<DefaultSeo {...SEO} />
			<Component key={router.asPath.split('?')[0]} {...pageProps} />
		</>
	);
};

export default App;
