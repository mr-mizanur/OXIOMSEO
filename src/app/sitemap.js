// app/sitemap.js

export default function sitemap() {
  const baseUrl = 'https://oxiomseo.vercel.app';


  const routes = [
    '',               // Home
    '/services',      // Services
    '/success',       // Success Stories
    '/process',       // Our Process
    '/team',          // The Team
    '/results',       // Our Results
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}