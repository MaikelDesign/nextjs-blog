import MediumPosts from '../components/medium-posts'
import DefaultTemplate from '../templates/default'

export default function Index() {
  return (
    <DefaultTemplate>
      <section>
        <h1>Design. Tech. Humans.</h1>
        <p>A little blog with short stories based on exprience, knowledge and thoughts.</p>
      </section>
      <section>
        <h2 >Blog</h2>
        <MediumPosts/>
      </section>
    </DefaultTemplate>
  )
}
