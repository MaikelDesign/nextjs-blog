import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout.js'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Design. Tech. Humans.</h1>
        <p>A little blog with short stories based on exprience, knowledge and thoughts.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
      </section>
    </Layout>
  )
}
