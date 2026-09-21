import Layout from '../components/layout'
import ProjectGrid from '../components/project-grid'
import { siteConfig } from '../config/site'
import { projects } from '../data/projects/index.mjs'

const HOME_PROJECT_COUNT = 18

function ExternalLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#e61428]">
      {children}→
    </a>
  )
}

export default function Home() {
  return (
    <Layout>
      <section className="mx-auto max-w-[640px] px-[5px] pb-[44px] pt-[24px] text-center text-[16px] font-medium md:pb-[90px] md:pt-[60px] md:text-[17.7px] leading-[23px] tracking-[-0.5px]">
        <p className="label">{siteConfig.name}</p>
        <span aria-hidden="true" className="mx-auto my-[14px] block h-px w-[28px] bg-current" />
        <h1 className="font-secondary text-[1.1em] italic leading-none pb-[10px] md:pb-0">
          {siteConfig.title}
        </h1>
        <p className="paragraph-text mt-[23px]">
          Merken laten zich niet vangen in een los symbool — ik zoek de betekenis in de naam zelf.
          Door een merk te leren kennen: zijn verhaal, zijn spanning, wat het drijft, denk ik vanuit
          concept naar vorm en verweef ik die betekenis in de letters van de naam. Elke letter kan
          meer dragen dan een klank.
        </p>
      </section>
      <ProjectGrid items={projects.slice(0, HOME_PROJECT_COUNT)} />
    </Layout>
  )
}
