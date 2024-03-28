import Link from 'next/link'
import { StyledNav, StyledLink, StyledHeader2, StyledImage, StyledNavItemsList } from './style'

const name = 'Maikel Verbeek'

const NavSideBar = () => {
  return (
    <StyledNav>
      <header>
        <>
          <Link href="/">
            <StyledImage priority src="/images/profile.jpg" height={108} width={108} alt="" />
          </Link>
          <StyledHeader2>
            <StyledLink href="/">{name}</StyledLink>
          </StyledHeader2>
        </>
      </header>
      <StyledNavItemsList>
        <li>
          <StyledLink href="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink href="/about">About</StyledLink>
        </li>
        <li>
          <StyledLink href="/contact">Contact</StyledLink>
        </li>
      </StyledNavItemsList>
    </StyledNav>
  )
}

export default NavSideBar
