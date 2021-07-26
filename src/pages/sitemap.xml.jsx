import fs from 'fs';

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  // const process.env.baseURL = {
  //   development: 'http://localhost:3000',
  //   production: 'https://website.com.au',
  // }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync('src/pages')
    .filter(
      (staticPage) =>
        ![
          '_app.jsx',
          '_document.jsx',
          '_error.jsx',
          'sitemap.xml.jsx',
        ].includes(staticPage)
    )
    .map((staticPagePath) => {
      if (staticPagePath === 'index.jsx') {
        return `${process.env.baseURL}`;
      }
      return `${process.env.baseURL}/${staticPagePath}`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map(
          (url) => `
            <url>
              <loc>${url.replace('.jsx', '')}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `
        )
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
