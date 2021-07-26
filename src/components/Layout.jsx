import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Header from './Header';
import Footer from './Footer';

const Layout = ({
  children,
  pageDescription = 'Page description',
  pageTitle = 'Page Title',
}) => {
  const router = useRouter();
  const canonicalURL = `${process.env.NEXT_PUBLIC_baseURL}/${router.pathname}`;

  console.log(process.env.NEXT_PUBLIC_baseURL);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <NextSeo
        title={pageTitle}
        titleTemplate="AJB Next Start | %s"
        description={pageDescription}
        canonical={canonicalURL}
      />
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
