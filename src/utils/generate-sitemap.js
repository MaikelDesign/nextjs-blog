const fs = require('fs')
const path = require('path')
const glob = require('glob')

function generateSiteMap() {
  const staticPages = glob.sync('./src/pages/**/*.js', { ignore: ['./src/pages/_*.js', './src/pages/api/**/*.js', './src/pages/posts/*.js'] })

  const postsDirectory = path.join(process.cwd(), 'src/posts')
  const fileNames = fs.readdirSync(postsDirectory)
  const postIds = fileNames.map((fileName) => {
    return {
      id: fileName.replace(/\.md$/, ''),
    }
  })

  const urls = [
    ...staticPages.map(page => {
      const path = page 
        .replace('./src/pages', '')
        .replace('.js', '')
        .replace('.tsx', '')
        .replace('/index', '')

      return { url: `https://www.maikelverbeek.com${path === '' ? '/' : path}`, changefreq: 'daily', priority: 0.7 }
    }),
    ...postIds.map(id => {
      return {
        url: `https://www.maikelverbeek.com/posts/${id.id}`,
        changefreq: 'weekly',
        priority: 0.5
      }
    })
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls
    .map(urlObj => `
            <url>
                <loc>${urlObj.url}</loc>
                <changefreq>${urlObj.changefreq}</changefreq>
                <priority>${urlObj.priority}</priority>
            </url>
        `
    )
    .join('')}
    </urlset>
    `

  fs.writeFileSync(path.resolve('./public/sitemap.xml'), sitemap)
}

generateSiteMap()
