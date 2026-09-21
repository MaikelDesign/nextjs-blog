/*
 * Project registry. Each project lives in its own config file next to this one
 * (see sample-brand-identity.mjs for the shape and helpers.mjs for the block types).
 *
 * To add a project:    create <slug>.mjs, import it below and add it to `entries`.
 * To reorder projects: move it in `entries` (this is the order of the Work page and home grid).
 * To remove a project: delete it from `entries` (and delete its file).
 *
 * This is a .mjs module so the sitemap script (plain Node) can import it as well.
 */
import sampleBrandIdentity from './sample-brand-identity.mjs'
import sampleEditorialProject from './sample-editorial-project.mjs'
import sampleTypeSpecimen from './sample-type-specimen.mjs'

const entries = [sampleBrandIdentity, sampleEditorialProject, sampleTypeSpecimen]

const REQUIRED = ['slug', 'title', 'hero', 'description', 'byline', 'credits', 'blocks']

function validate(entries) {
  const seen = new Set()
  for (const entry of entries) {
    const missing = REQUIRED.filter((key) => entry[key] === undefined)
    if (missing.length) {
      throw new Error(
        `Project "${entry.slug ?? entry.title ?? '?'}" is missing: ${missing.join(', ')}`,
      )
    }
    if (seen.has(entry.slug)) throw new Error(`Duplicate project slug: "${entry.slug}"`)
    seen.add(entry.slug)
  }
}

validate(entries)

// Thumbnails for the Work page and home grid; defaults to the hero image.
export const projects = entries.map(({ slug, title, thumbnail, hero }) => ({
  slug,
  title,
  src: thumbnail ?? hero.src,
}))

// Page content, keyed by slug.
export const projectDetails = Object.fromEntries(
  entries.map(({ slug, hero, description, byline, credits, blocks }) => [
    slug,
    { hero, description, byline, credits, blocks },
  ]),
)

export const hasProjectDetail = (slug) => slug in projectDetails
