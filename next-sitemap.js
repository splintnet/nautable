/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.nautable.com',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
}
