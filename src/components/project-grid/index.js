import Link from 'next/link'
import { hasProjectDetail } from '../../data/projects/index.mjs'

// Touch devices have no hover, so the title is shown as a caption under the image there.
function Tile({ project }) {
  return (
    <>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.src}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center p-6 text-center text-[11px] text-white opacity-0 mix-blend-difference transition-opacity duration-200 group-hover:opacity-100 pointer-coarse:hidden">
          {project.title}
        </span>
      </div>
      <span className="hidden px-[2px] pb-[10px] pt-[6px] pointer-coarse:block">
        {project.title}
      </span>
    </>
  )
}

export default function ProjectGrid({ items }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3">
      {items.map((project) => (
        <li key={project.slug} className="group">
          {hasProjectDetail(project.slug) ? (
            <Link href={`/${project.slug}`} className="block">
              <Tile project={project} />
            </Link>
          ) : (
            <Tile project={project} />
          )}
        </li>
      ))}
    </ul>
  )
}
