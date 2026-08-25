import { StyledNav, StyledLink, StyledHeader2, StyledImage, StyledNavItemsList, StyledImageLink } from './style'

const name = 'Maikel Verbeek'

const NavSideBar = () => {
  return (
    <StyledNav>
      <header>
        <>
          <StyledImageLink href="/">
            <StyledImage priority src="/images/profile.jpg" height={108} width={108} alt="" />
          </StyledImageLink>
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
