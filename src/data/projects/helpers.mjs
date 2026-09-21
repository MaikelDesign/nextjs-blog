/*
 * Helpers for writing a project config.
 *
 * A project page is: hero image, title + description + credits, then `blocks`.
 * Blocks are rendered in a 2-column grid (single column on mobile):
 *
 *   img(src, alt, { span: 2 })                 span: 2 = full width, default = half
 *   text(heading, [paragraphs], { quote })     quote = attribution line (renders "—" + name)
 *
 * Any block can take `{ col: 'right' }` to start in the right column.
 */
export const img = (src, alt = '', extra = {}) => ({ type: 'image', src, alt, ...extra })

export const text = (heading, paragraphs, extra = {}) => ({
  type: 'text',
  heading,
  paragraphs,
  ...extra,
})
