# Next.js Starter

Next starter for standard marketing sites that have SEO considerations.
Does not include set up for CMS.

## Setup

- run `pnpm install`
- update `/src/data/general.json`
- update urls in `/robots.txt`

## Features

### CSS & Tailwind

https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss

- added `styles` folder with a `global.css` that includes tailwind imports
- includes aspect ratio plugin

### SRC Folder

- `src` folder has been added to keep everything tidy.

### Absolute Imports

- absolute imports are configured in the `jsconfig.json` file.
  https://nextjs.org/docs/advanced-features/module-path-aliases

### ESLint

- ESLint is configured via https://nextjs.org/docs/basic-features/eslint
- this needs more documentation

### Layout

- Uses a global Layout component.
- Works well for sites with 1 main layout.
- further reading: https://nextjs.org/docs/basic-features/layouts
- further reading https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/
- _note!_ Adam Wathan's approach doesn't cover how to update a pages meta, title etc.

### SEO

- uses https://github.com/garmeeh/next-seo for SEO
- `next-seo.config` contains defaults for OpenGraph but hasn't been configured fully.
- `_app.jsx` contains a `<DefaultSeo {...SEO} />` that contains the defaults
- `src/components/Layout.jsx` contains `<NextSEO>` main component which contains the title, description and canonical props.
- each page is wrapped in `<Layout>` and passes back the title and description via a variable at the top of the file.

### Environment Variables

- contains `.env.local.example` with example entries.
- further reading: https://nextjs.org/docs/basic-features/environment-variables

### Sitemap

- sitemap is generated for static pages via `next-sitemap`.
- `package.json` contains a `postbuild` step that builds the sitemap into the public folder.
- also generates a robots.txt into the public folder

### Custom Document

- custom document added to add hardcoded html lang attribute
- further reading: https://nextjs.org/docs/advanced-features/custom-document

### Custom App

- custom app added to add default SEO
- further reading: https://nextjs.org/docs/advanced-features/custom-app

### To Do

- [ ] add add explaination for tailwind plugins
- [ ] add api pages to read me
- [ ] add consistent styling
- [ ] add in commonly used CMS settings? as branches?
- [ ] add next image example
- [ ] add basic typograpical defaults
- [ ] be better at commit messages
