import Layout from '../components/layout'
import { siteConfig } from '../config/site'

// eslint-disable-next-line no-unused-vars -- hidden on purpose, see the commented <Section /> usages below
const awards = [
  'Award Name One (2024)',
  'Award Name Two (2023)',
  '3 Award Name Three (2022)',
  'Award Name Four (2021)',
  'Award Name Five (2020)',
  'Award Name Six (2019)',
]

// eslint-disable-next-line no-unused-vars -- hidden on purpose, see the commented <Section /> usages below
const publishedIn = [
  'Publication One',
  'Publication Two',
  'Publication Three',
  'Publication Four',
  'Publication Five',
  'Publication Six',
]

// eslint-disable-next-line no-unused-vars -- hidden on purpose, see the commented <Section /> usages below
const talks = [
  { label: 'Lecture Series at Example University (2024)', href: 'https://example.com' },
  { label: 'Conference Talk (2022)', href: 'https://example.com' },
  { label: 'Podcast Interview (2021)' },
]

// eslint-disable-next-line no-unused-vars -- hidden on purpose, see the commented <Section /> usages below
const collaboration = [
  'Client One',
  'Client Two',
  'Client Three',
  'Client Four',
  'Client Five',
  'Client Six',
  'Client Seven',
  'Client Eight',
  'Client Nine',
  'Client Ten',
]

const LOREM = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
]

function Ext({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}→
    </a>
  )
}

function Heading({ children }) {
  return <h2 className="mb-[22px] text-[19.9px] font-bold leading-none">{children}</h2>
}

function List({ items }) {
  return (
    <ul>
      {items.map((item) => {
        const { label, href } = typeof item === 'string' ? { label: item } : item
        return <li key={label}>{href ? <Ext href={href}>{label}</Ext> : label}</li>
      })}
    </ul>
  )
}

// eslint-disable-next-line no-unused-vars -- hidden on purpose, see the commented <Section /> usages below
function Section({ title, items }) {
  return (
    <section className="mt-[36px] md:mt-[44px]">
      <h3 className="mb-[13px]">{title}</h3>
      <List items={items} />
    </section>
  )
}

export default function About() {
  const { name, email, portrait, instagram } = siteConfig
  return (
    <Layout title={`About - Work by ${name}`} footer>
      <div className="mx-auto grid max-w-[812px] grid-cols-1 gap-x-[67px] gap-y-[44px] md:grid-cols-2">
        <div>
          <img
            src={portrait}
            alt={`Portrait of ${name}`}
            className="aspect-square w-full object-cover"
          />
          <div className="mt-[44px] space-y-[18px]">
            <Heading>What I do</Heading>
            {LOREM.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div>
          <div className="space-y-[18px]">
            <Heading>Who I am</Heading>
            {LOREM.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              In 2020, I joined <Ext href="https://example.com">Studio Name</Ext> as a Creative
              Director. In 2024, I became a Partner.
            </p>
          </div>

          <div className="mt-[44px] space-y-[18px]">
            <Heading>Get in touch</Heading>
            <ul>
              <li>
                <Ext href={`mailto:${email}`}>Email</Ext>
              </li>
              {instagram.enabled && (
                <li>
                  <Ext href={instagram.url}>Instagram</Ext>
                </li>
              )}
            </ul>
          </div>

          {/* <Section title="Awards" items={awards} /> */}
          {/* <Section title="Work Published In" items={publishedIn} /> */}
          {/* <Section title="Talks & Interviews" items={talks} /> */}
          {/* <Section title="Collaboration" items={collaboration} /> */}
        </div>
      </div>
    </Layout>
  )
}
