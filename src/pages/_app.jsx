/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import '../styles/global.css';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

export default function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
