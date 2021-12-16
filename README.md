# Next.js Starter

Next starter for standard marketing sites that have SEO considerations.
Does not include set up for CMS.

## Setup

- run `npm install`
- find and replace `https://website.com.au`
- find and replace `AJB Next Starter`

### Sanity

### 1) Sanity

1. If you don't have the [Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli) installed, first run `npm install -g @sanity/cli` to install it globally
2. `npm install && sanity init` in the `/studio` folder
3. During Sanity's initalization it will warn you, type `Y` and hit `enter`:

```
? The current folder contains a configured Sanity studio. Would you like to reconfigure it? (Y/n)
```

4. When it asks you what dataset configuration to use, go with the `default`
5. Add CORS Origins to your newly created Sanity project (visit: [manage.sanity.io](https://manage.sanity.io) and go to Settings > API): - Add your Studio URLs **_with_** credentials: `http://localhost:3333` and `[subdomain].sanity.studio` - Add your front-end URLs **_without_** credentials: `http://localhost:3000` and `https://[subdomain].vercel.app`
   > ⚠️ **Important!** <br />For "singleton" documents, like settings sections, the schema uses a combination of `__experimental_actions` and the new [actions resolver](https://www.sanity.io/docs/document-actions). If you are using this outside of the official Sanity Starter, you will need to comment out the `__experimental_actions` line in "singleton" schemas to publish settings for the first time. This is because a singleton is still a document type, and one needs to exist first before it can be edited. Additionally, if you want to create additional "singleton" schemas, be sure to edit the `singletons` array in the following file: `/studio/parts/resolve-actions.js`.

## Features

### CSS & Tailwind

https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss

- added `styles` folder with a `global.css` that includes tailwind imports
- `JIT` is turn on, `TAILWIND_MODE=watch` has been added to the `dev` script in `package.json
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

- for Sanity don't use `next-sitemap` use the custom `sitemap.xml.jsx` page

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
