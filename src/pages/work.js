import Layout from '../components/layout'
import ProjectGrid from '../components/project-grid'
import { siteConfig } from '../config/site'
import { projects } from '../data/projects/index.mjs'

export default function Work() {
  return (
    <Layout title={`Work - Work by ${siteConfig.name}`}>
      <ProjectGrid items={projects} />
    </Layout>
  )
}
