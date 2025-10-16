/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.revissaway.com.au',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 7000,
  exclude: ['/404'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
      'https://www.revissaway.com.au/sitemap.xml',
    ],
  },
};

