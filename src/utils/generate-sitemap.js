const fs = require('fs')
const path = require('path')
const glob = require('glob')

const SITE_URL = 'https://www.maikelverbeek.com'

async function generateSiteMap() {
  // The data modules are ESM (.mjs), so they have to be loaded with a dynamic import.
  const { projectDetails } = await import('../data/projects/index.mjs')

  const staticPages = glob
    .sync('./src/pages/**/*.js', { ignore: ['./src/pages/_*.js', './src/pages/api/**/*.js'] })
    // Dynamic routes such as [slug].js are expanded from data below.
    .filter((page) => !page.includes('['))

  const urls = [
    ...staticPages.map((page) => {
      // glob may or may not prefix results with "./", depending on the version.
      const pagePath = page
        .replace(/^(\.\/)?src\/pages/, '')
        .replace('.js', '')
        .replace('/index', '')

      return {
        url: `${SITE_URL}${pagePath === '' ? '/' : pagePath}`,
        changefreq: 'daily',
        priority: 0.7,
      }
    }),
    ...Object.keys(projectDetails).map((slug) => ({
      url: `${SITE_URL}/${slug}`,
      changefreq: 'weekly',
      priority: 0.5,
    })),
  ]

  const urlElements = urls.map(({ url, changefreq, priority }) =>
    [
      '  <url>',
      `    <loc>${url}</loc>`,
      `    <changefreq>${changefreq}</changefreq>`,
      `    <priority>${priority}</priority>`,
      '  </url>',
    ].join('\n'),
  )

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urlElements,
    '</urlset>',
    '',
  ].join('\n')

  fs.writeFileSync(path.resolve('./public/sitemap.xml'), sitemap)
}

generateSiteMap()
