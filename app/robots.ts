// app/robots.ts
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://sin-city-ink.app/sitemap.xml',
    host: 'https://sin-city-ink.app',
  };
}
