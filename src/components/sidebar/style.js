import styled, { css } from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

export const StyledNav = styled.nav`
    background: rgba(0, 0, 0, 0.5);
    padding: 2rem;
    flex: 1;
    height: 100vh;
    position: sticky;
    top: 0;
    max-width: 12rem;
`
export const StyledLink = styled(Link)(
  () => css`
    color: white;
    `
)

export const StyledHeader2 = styled.h2(
  ({ theme: { SIZES }}) => css`
        font-size: ${SIZES.SM};
    `
)

export const StyledImage = styled(Image)(
  () => css`
        border-radius: 50%;
    `
)

export const StyledNavItemsList = styled.ul(
  () => css`
        
    `
)