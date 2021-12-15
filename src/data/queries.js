import groq from 'groq';

// GROQ Image Meta for Custom Images
export const imageMeta = `
  alt,
  "asset": asset-> {
    ...
  },
  crop,
  hotspot
`;

export const customImage = `
  _type == 'customImage' => {
    ${imageMeta}
  }
`;

// GROQ all pages
export const allPagesQuery = `
  *[_type in ["homePage", "page"] && defined(slug.current)][].slug.current
`;
// GROQ All Slugs
export const allSlugsQuery = `
  *[defined(slug.current)][].slug.current
`;

// GROQ Main Navigation
export const mainNavQuery = `
  *[_type == "menu"][0]{
    items[]{
      _key,
      _type,
      title,
      url,
      "page": page->{
        "type": _type,
        "slug":slug.current
      }
    }
  }
`;

// GROQ Site
// grabs site and business settings, the menu and home page sections for the nav
export const siteQuery = `{
  "settings": *[_type == "siteSettings"][0],
  "businessSettings": *[_type == "businessDetails"][0],
  "menu": ${mainNavQuery}
}`;
