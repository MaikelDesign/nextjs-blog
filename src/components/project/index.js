import Link from 'next/link'

function Block({ block }) {
  const placement = [
    block.span === 2 ? 'md:col-span-2' : '',
    block.col === 'right' ? 'md:col-start-2' : '',
  ].join(' ')

  if (block.type === 'image') {
    return (
      <div className={placement}>
        <img src={block.src} alt={block.alt} loading="lazy" className="block h-auto w-full" />
      </div>
    )
  }

  return (
    <div className={`space-y-[18px] ${placement}`}>
      <h2 className="text-[19.9px] font-bold leading-none">{block.heading}</h2>
      {!block.quote && <p aria-hidden>—</p>}
      {block.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {block.quote && (
        <p>
          —<br />
          {block.quote}
        </p>
      )}
    </div>
  )
}

function PagerLink({ project, children }) {
  if (!project) return <span className="text-[#ccc]">{children}</span>
  return (
    <Link href={`/${project.slug}`} className="text-[#999]">
      {children}
    </Link>
  )
}

export default function ProjectTemplate({ project, detail, prev, next }) {
  return (
    <article>
      <img src={detail.hero.src} alt={detail.hero.alt} className="block h-auto w-full" />

      <header className="grid grid-cols-1 gap-x-[22px] gap-y-[22px] pb-[56px] pt-[11px] md:grid-cols-2 md:pb-[100px]">
        <h1 className="text-[clamp(1.75rem,9vw,2rem)] font-bold leading-none tracking-[-0.02em] md:text-[clamp(2rem,4.3vw,44.2px)]">
          {project.title}
        </h1>
        <div className="space-y-[18px] font-semibold">
          <p aria-hidden>—</p>
          {detail.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>{detail.byline}</p>
          <dl className="space-y-[6px]">
            {detail.credits.map(({ label, value }) => (
              <div key={label} className="grid grid-cols-[90px_1fr] gap-x-[11px]">
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-x-[22px] gap-y-[36px] md:grid-cols-2 md:gap-y-[90px]">
        {detail.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>

      <nav className="flex items-center justify-between gap-[12px] whitespace-nowrap py-[56px] text-[clamp(15px,4.5vw,22px)] leading-none md:justify-center md:gap-[44px] md:py-[90px]">
        <PagerLink project={prev}>← Previous</PagerLink>
        <Link href="/work" className="text-[#999]">
          All Works
        </Link>
        <PagerLink project={next}>Next →</PagerLink>
      </nav>
    </article>
  )
}
