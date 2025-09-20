// app/sitemap.ts
export default function sitemap() {
  const base = 'https://sin-city-ink.app';
  const now = new Date().toISOString();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/impressum`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
  ];
}
