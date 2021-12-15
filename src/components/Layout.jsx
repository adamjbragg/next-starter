import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Header from './header';
import Footer from './footer';

const Layout = function ({
	children,
	pageDescription = 'Page description',
	pageTitle = 'Page Title',
}) {
	const router = useRouter();
	const canonicalURL = `${process.env.NEXT_PUBLIC_SITE_URL}${router.pathname}`;

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<NextSeo
				title={pageTitle}
				titleTemplate="AJB Next Starter | %s"
				description={pageDescription}
				canonical={canonicalURL}
			/>
			<Header />
			<main className="container flex flex-col justify-center flex-1 w-full px-5">
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
