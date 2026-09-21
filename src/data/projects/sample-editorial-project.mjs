import { img, text } from './helpers.mjs'
import { LOREM, credits } from './dummy.mjs'

export default {
  slug: 'sample-editorial-project',
  title: 'Sample Editorial Project',
  thumbnail: '/placeholders/wide-4.svg',
  hero: img('/placeholders/wide-4.svg', 'Hero placeholder'),
  description: LOREM.slice(0, 2),
  byline: 'Design at Studio Name',
  credits: credits('Editorial, Print'),
  blocks: [
    text('Concept', LOREM),
    img('/placeholders/square-3.svg'),
    img('/placeholders/wide-1.svg', '', { span: 2 }),
    img('/placeholders/square-1.svg'),
    text('Production', LOREM.slice(0, 1), { col: 'right' }),
  ],
}
