import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Header from './site-header';
import Footer from './site-footer';
import Alert from './alert';

const Layout = function ({
	children,
	site,
	preview,
	pageDescription = 'Page description',
	pageTitle = 'Page Title',
}) {
	const router = useRouter();
	const canonicalURL = `${
		process.env.NEXT_PUBLIC_SITE_URL
	}${router.asPath.replace('/', '')}`;

	const data = {
		...site?.menu,
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-full">
			{preview ? <Alert preview={preview} /> : null}
			<NextSeo
				title={pageTitle}
				titleTemplate="AJB Next Starter | %s"
				description={pageDescription}
				canonical={canonicalURL}
			/>
			<Header data={data} />
			<main className="flex flex-col flex-1 w-full min-h-full px-5">
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
