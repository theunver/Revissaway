/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://revissaway.vercel.app',
  generateRobotsTxt: true, // robots.txt dosyası oluşturur
  sitemapSize: 7000,
  exclude: ['/404'],
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://revissaway.vercel.app/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Ana sayfaya daha yüksek priority ver
    const priority = path === '/' ? 1.0 : 0.8;
    
    return {
      loc: path,
      changefreq: 'weekly',
      priority: priority,
      lastmod: new Date().toISOString(),
    };
  },
};

