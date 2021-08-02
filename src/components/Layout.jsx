import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Header from './header/Header';
import Footer from './Footer';

const Layout = ({
  children,
  pageDescription = 'Page description',
  pageTitle = 'Page Title',
}) => {
  const router = useRouter();
  const canonicalURL = `${process.env.NEXT_PUBLIC_SITE_URL}/${router.pathname}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <NextSeo
        title={pageTitle}
        titleTemplate="AJB Next Start | %s"
        description={pageDescription}
        canonical={canonicalURL}
      />
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 w-full px-5 py-10 bg-gray-200">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
