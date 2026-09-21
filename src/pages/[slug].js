import Layout from '../components/layout'
import ProjectTemplate from '../components/project'
import { siteConfig } from '../config/site'
import { hasProjectDetail, projectDetails, projects } from '../data/projects/index.mjs'

export async function getStaticPaths() {
  return {
    paths: Object.keys(projectDetails).map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

// Neighbours in the Work list; only linked when they have a page of their own.
function pagerTarget(project) {
  return project && hasProjectDetail(project.slug)
    ? { slug: project.slug, title: project.title }
    : null
}

export async function getStaticProps({ params }) {
  const index = projects.findIndex((project) => project.slug === params.slug)
  return {
    props: {
      project: projects[index],
      detail: projectDetails[params.slug],
      prev: pagerTarget(projects[index - 1]),
      next: pagerTarget(projects[index + 1]),
    },
  }
}

export default function ProjectPage({ project, detail, prev, next }) {
  return (
    <Layout title={`${project.title} - Work by ${siteConfig.name}`} footer>
      <ProjectTemplate project={project} detail={detail} prev={prev} next={next} />
    </Layout>
  )
}
