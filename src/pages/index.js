import DefaultTemplate from '../templates/default'
import { getSortedPostsData } from '../utils/get-sorted-post-data'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Index({ allPostsData }) {
  return (
    <DefaultTemplate home>
      <section>
        <h1>Design. Tech. Humans.</h1>
        <p>A little blog with short stories based on exprience, knowledge and thoughts.</p>
      </section>
      <section>
        <h2 >Blog</h2> 
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </DefaultTemplate>
  )
}
