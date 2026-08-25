import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { getSortedPostsData } from '../utils/get-sorted-post-data'
import { getPostData } from '../utils/get-post-data'

export async function getStaticProps() {
  const sorted = getSortedPostsData()
  const allPostsData = await Promise.all(sorted.map(({ id }) => getPostData(id)))
  return { props: { allPostsData } }
}

// From each panel, which panel lives in each direction
const NAV_MAP = {
  home:    { top: 'about', right: 'work', bottom: 'blog', left: 'contact' },
  about:   { bottom: 'home' },
  work:    { left: 'home' },
  blog:    { top: 'home' },
  contact: { right: 'home' },
}

const LABELS = {
  home: 'Home', about: 'About', work: 'Work', blog: 'Blog', contact: 'Contact',
}

const ARROWS = { top: '↑', right: '→', bottom: '↓', left: '←' }

// Track is 300vw × 300vh; panels sit at fixed positions inside it.
// To show a panel, we translate the track so that panel aligns with the viewport.
function getPos(panel) {
  const vw = window.innerWidth
  const vh = window.innerHeight
  return {
    home:    { x: -vw,     y: -vh     },
    about:   { x: -vw,     y: 0       },
    blog:    { x: -vw,     y: -2 * vh },
    work:    { x: -2 * vw, y: -vh     },
    contact: { x: 0,       y: -vh     },
  }[panel]
}

export default function Portfolio({ allPostsData }) {
  const trackRef = useRef(null)
  const workContentRef = useRef(null)
  const contactContentRef = useRef(null)
  const [current, setCurrent] = useState('home')
  const [busy, setBusy] = useState(false)
  const [activePost, setActivePost] = useState(null)

  useEffect(() => {
    gsap.set(trackRef.current, getPos('home'))
  }, [])

  // Animate panel content horizontally when arriving at Work or Contact
  useEffect(() => {
    if (current === 'work' && workContentRef.current) {
      gsap.fromTo(
        workContentRef.current,
        { x: 80, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out', delay: 0.85 }
      )
    }
    if (current === 'contact' && contactContentRef.current) {
      gsap.fromTo(
        contactContentRef.current,
        { x: -80, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out', delay: 0.85 }
      )
    }
  }, [current])

  function go(panel) {
    if (!panel || busy) return
    setBusy(true)
    setCurrent(panel)
    if (panel !== 'blog') setActivePost(null)
    gsap.to(trackRef.current, {
      ...getPos(panel),
      duration: 1.2,
      ease: 'power3.inOut',
      onComplete: () => setBusy(false),
    })
  }

  const nav = NAV_MAP[current] || {}

  return (
    <>
      {/* Full-screen clip */}
      <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', background: '#0d0d0d' }}>
        {/* Scrollable world: 3×3 panel grid */}
        <div ref={trackRef} style={{ position: 'absolute', width: '300vw', height: '300vh' }}>
          <Slide l="100vw" t="100vh"><Home /></Slide>
          <Slide l="100vw" t="0"><About /></Slide>
          <Slide l="100vw" t="200vh"><Blog posts={allPostsData} activePost={activePost} setActivePost={setActivePost} /></Slide>
          <Slide l="200vw" t="100vh"><Work contentRef={workContentRef} /></Slide>
          <Slide l="0"     t="100vh"><Contact contentRef={contactContentRef} /></Slide>
        </div>
      </div>

      {/* Fixed directional navigation */}
      <nav style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 50 }}>
        {['top', 'right', 'bottom', 'left'].map((dir) =>
          nav[dir] ? (
            <NavBtn key={dir} dir={dir} onClick={() => go(nav[dir])}>
              {LABELS[nav[dir]]}
            </NavBtn>
          ) : null
        )}
      </nav>
    </>
  )
}

function Slide({ l, t, children }) {
  return (
    <div style={{ position: 'absolute', left: l, top: t, width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {children}
    </div>
  )
}

const BTN_POS = {
  top:    { top: '2rem',    left: '50%',  transform: 'translateX(-50%)', flexDirection: 'column', alignItems: 'center' },
  bottom: { bottom: '2rem', left: '50%',  transform: 'translateX(-50%)', flexDirection: 'column-reverse', alignItems: 'center' },
  right:  { top: '50%',    right: '2rem', transform: 'translateY(-50%)' },
  left:   { top: '50%',    left: '2rem',  transform: 'translateY(-50%)' },
}

function NavBtn({ dir, onClick, children }) {
  const isVertical = dir === 'left' || dir === 'right'

  const baseStyle = {
    position: 'absolute',
    display: 'flex',
    gap: '0.25rem',
    pointerEvents: 'auto',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: 'rgba(255,255,255,0.3)',
    fontSize: '0.7rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    transition: 'color 0.3s',
    padding: '0.75rem',
    ...BTN_POS[dir],
  }

  return (
    <button
      onClick={onClick}
      style={baseStyle}
      onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
    >
      {isVertical ? (
        // Vertical label: left reads bottom→top, right reads top→bottom
        <span style={{
          writingMode: 'vertical-rl',
          transform: dir === 'left' ? 'rotate(180deg)' : 'none',
        }}>
          {children}
        </span>
      ) : (
        <>
          <span>{ARROWS[dir]}</span>
          <span>{children}</span>
        </>
      )}
    </button>
  )
}

// ── Panels ────────────────────────────────────────────────────────────────────

const panelStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  padding: '0 8vw',
}

const eyebrowStyle = {
  color: 'rgba(255,255,255,0.2)',
  fontSize: '0.65rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  marginBottom: '1.5rem',
}

const headingStyle = {
  color: '#fff',
  fontWeight: 300,
  lineHeight: 1,
  marginBottom: '1.5rem',
  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
}

const bodyStyle = {
  color: 'rgba(255,255,255,0.45)',
  fontSize: '1.1rem',
  lineHeight: 1.7,
  maxWidth: '48ch',
}

function Home() {
  return (
    <div style={panelStyle}>
      <span style={eyebrowStyle}>Portfolio</span>
      <h1 style={{ ...headingStyle, fontSize: 'clamp(4rem, 10vw, 9rem)' }}>
        Maikel
      </h1>
      <p style={bodyStyle}>Design. Tech. Humans.</p>
    </div>
  )
}

function About() {
  return (
    <div style={{ ...panelStyle, maxWidth: '900px', margin: '0 auto', width: '100%' }}>
      <span style={eyebrowStyle}>01 — About</span>
      <h2 style={headingStyle}>About me</h2>
      <p style={bodyStyle}>
        This is the part where I talk about myself a little.
      </p>
    </div>
  )
}

function Work({ contentRef }) {
  return (
    <div style={{ ...panelStyle, maxWidth: '900px', margin: '0 auto', width: '100%' }}>
      <div ref={contentRef}>
        <span style={eyebrowStyle}>02 — Work</span>
        <h2 style={headingStyle}>Work</h2>
        <p style={bodyStyle}>Projects coming soon.</p>
      </div>
    </div>
  )
}

function Blog({ posts, activePost, setActivePost }) {
  const articleRefs = useRef({})

  function toggle(id) {
    if (activePost === id) {
      closeArticle(id)
      setActivePost(null)
    } else {
      if (activePost) closeArticle(activePost)
      openArticle(id)
      setActivePost(id)
    }
  }

  function openArticle(id) {
    const el = articleRefs.current[id]
    // Measure natural height, then animate from 0
    gsap.set(el, { height: 'auto' })
    const h = el.offsetHeight
    gsap.fromTo(el, { height: 0 }, { height: h, duration: 0.5, ease: 'power2.out', overwrite: true })
  }

  function closeArticle(id) {
    gsap.to(articleRefs.current[id], { height: 0, duration: 0.35, ease: 'power2.inOut', overwrite: true })
  }

  return (
    <div style={{ height: '100vh', overflowY: 'auto' }}>
      <div style={{ padding: '15vh 8vw 8vh' }}>
        <span style={eyebrowStyle}>03 — Blog</span>
        <h2 style={headingStyle}>Writing</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {posts.map(({ id, title, date, contentHtml }) => (
            <li key={id}>
              {/* Title row */}
              <button
                onClick={() => toggle(id)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  cursor: 'pointer',
                  padding: '1.25rem 0',
                  gap: '2rem',
                }}
              >
                <span style={{
                  color: activePost === id ? '#fff' : 'rgba(255,255,255,0.55)',
                  fontSize: '1.1rem',
                  transition: 'color 0.2s',
                }}>
                  {title}
                </span>
                <span style={{
                  color: 'rgba(255,255,255,0.2)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  whiteSpace: 'nowrap',
                }}>
                  {date}
                </span>
              </button>

              {/* Article: negative margin breaks out to full panel width */}
              <div
                ref={el => articleRefs.current[id] = el}
                style={{ height: 0, overflow: 'hidden', margin: '0 -8vw' }}
              >
                <div
                  className="blog-article"
                  style={{ background: '#f0efed', padding: '3rem 8vw 3.5rem' }}
                  dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Contact({ contentRef }) {
  return (
    <div style={{ ...panelStyle, maxWidth: '900px', margin: '0 auto', width: '100%' }}>
      <div ref={contentRef}>
        <span style={eyebrowStyle}>04 — Contact</span>
        <h2 style={headingStyle}>Contact</h2>
        <p style={{ ...bodyStyle, marginBottom: '2rem' }}>
          Let's work together.
        </p>
        <a
          href="mailto:maikelvbk@gmail.com"
          style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1.1rem', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
        >
          maikelvbk@gmail.com
        </a>
      </div>
    </div>
  )
}
