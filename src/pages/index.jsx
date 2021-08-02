import Layout from '@/components/Layout';

const Home = () => {
  const meta = {
    pageTitle: 'Home',
    pageDescription: 'Page description',
  };

  return (
    <Layout pageTitle={meta.pageTitle} pageDescription={meta.pageDescription}>
      <h1>AJB Next.js starter!</h1>
      <p>This is the page content</p>
    </Layout>
  );
};

export default Home;
