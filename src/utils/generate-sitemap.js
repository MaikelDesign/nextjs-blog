const fs = require('fs')
const path = require('path')
const glob = require('glob')

function generateSiteMap() {
  const pages = glob.sync('pages/**/*.js', { ignore: ['pages/_*.js', 'pages/api/**/*.js'] })

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
    .map(page => {
      const path = page
        .replace('pages', '')
        .replace('.js', '')
        .replace('.tsx', '')
        .replace('/index', '')

      return `
            <url>
                <loc>${`https://www.maikelverbeek.com${path === '' ? '/' : path}`}</loc>
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
            </url>
        `
    })
    .join('')}
    </urlset>
    `

  fs.writeFileSync(path.resolve('./public/sitemap.xml'), sitemap)
}

generateSiteMap()
