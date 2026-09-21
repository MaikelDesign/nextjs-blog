import { img, text } from './helpers.mjs'
import { LOREM, credits } from './dummy.mjs'

export default {
  slug: 'sample-brand-identity',
  title: 'Sample Brand Identity',
  thumbnail: '/placeholders/wide-1.svg',
  hero: img('/placeholders/wide-1.svg', 'Hero placeholder'),
  description: LOREM,
  byline: 'Creative Direction & Design at Studio Name',
  credits: credits('Identity, Type Design'),
  blocks: [
    img('/placeholders/square-1.svg'),
    img('/placeholders/square-2.svg'),
    text('First section heading', LOREM.slice(0, 2)),
    img('/placeholders/wide-3.svg'),
    text('Second section heading', LOREM.slice(1), { col: 'right' }),
    img('/placeholders/wide-2.svg', '', { span: 2 }),
    text('“A placeholder quote about the project goes here, just long enough to wrap.”', [], {
      quote: 'Client Person, Job Title',
    }),
    img('/placeholders/tall-1.svg'),
    img('/placeholders/tall-2.svg'),
  ],
}
