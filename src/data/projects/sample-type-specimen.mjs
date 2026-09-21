import { img, text } from './helpers.mjs'
import { LOREM, credits } from './dummy.mjs'

export default {
  slug: 'sample-type-specimen',
  title: 'Sample Type Specimen',
  thumbnail: '/placeholders/wide-2.svg',
  hero: img('/placeholders/wide-2.svg', 'Hero placeholder'),
  description: LOREM.slice(0, 1),
  byline: 'Type design at Studio Name',
  credits: credits('Typography'),
  blocks: [
    img('/placeholders/wide-3.svg', '', { span: 2 }),
    text('Letterforms', LOREM.slice(0, 2)),
    img('/placeholders/square-4.svg'),
    img('/placeholders/tall-1.svg'),
    text('Usage', LOREM.slice(2), { col: 'right' }),
  ],
}
