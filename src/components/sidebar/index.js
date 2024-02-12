import Link from 'next/link'
import { StyledNav, StyledLink } from './style'
import Image from 'next/image'

const name = 'Maikel Verbeek'

const NavSideBar = () => {
  return (
    <StyledNav>
      <header >
        <>
          <Link href="/">
            <Image
              priority
              src="/images/profile.jpg"
              height={108}
              width={108}
              alt=""
            />
          </Link>
          <h2>
            <StyledLink href="/">
              {name}
            </StyledLink>
          </h2>
        </>
       
      </header>
      <ul>
        <li>
          <StyledLink href="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink href="/about">About</StyledLink>
        </li>
        <li>
          <StyledLink href="/contact">Contact</StyledLink>
        </li>
      </ul>
    </StyledNav>
  )
}

export default NavSideBar