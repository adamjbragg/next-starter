# Next.js Starter

Next starter for standard marketing sites that have SEO considerations.
Does not include set up for CMS.

## Features

### CSS & Tailwind

https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss

- added `styles` folder with a `global.css` that includes tailwind imports
- `JIT` is turn on, `TAILWIND_MODE=watch` has been added to the `dev` script in `package.json`

### SRC Folder

A `src` folder has been added to keep everything tidy.

### Absolute Imports

I've configured absolute imports in the `jsconfig.json` file.
https://nextjs.org/docs/advanced-features/module-path-aliases

### ESLint + Prettier

ESLint is configured via https://nextjs.org/docs/basic-features/eslint

- this needs more documentation

### Layout

Uses a global Layout component. Works well for sites with 1 main layout.
https://nextjs.org/docs/basic-features/layouts

further reading https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/

- this approach doesn't cover how to update a pages meta, title etc.

### SEO

Uses https://github.com/garmeeh/next-seo for SEO

- `next-seo.config` contains defaults for OpenGraph but hasn't been configured fully.
- `_app.jsx` contains a `<DefaultSeo {...SEO} />` that contains the defaults
- `src/components/Layout.jsx` contains `<NextSEO>` main component which contains the title, description and canonical props.
- each page is wrapped in `<Layout>` and passes back the title and description via a variable at the top of the file.

### Environment Variables

Contains both `env.development` and `env.production` to handle the baseURL that is passed to various components and the sitemap.

IMPORTANT: don't put secrets in these files
IMPORTANT: replace the production baseURL before build

https://nextjs.org/docs/basic-features/environment-variables

### Sitemap

A sitemap is generated for static pages via this method: https://cheatcode.co/tutorials/how-to-generate-a-dynamic-sitemap-with-next-js#fetching-data-for-your-sitemap

- worth looking into and replacing with `next-sitemap` for dynamic pages from a cms etc

- Sitemap for Static pages https://cheatcode.co/tutorials/how-to-generate-a-dynamic-sitemap-with-next-js#fetching-data-for-your-sitemap
- production and development .env files for different baseURLs for sitemap

### Custom Document

Added custom document to add hardcoded html lang attribute

### Custom App

Added custom app to add default SEO

### To Do
[] fix sitemap
[] fix environment variables / canonical etc