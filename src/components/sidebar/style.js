import styled, { css } from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

export const StyledNav = styled.nav(
  ({ theme: { SIZES }}) => css`
    background: rgba(0, 0, 0, 0.5);
    padding: ${SIZES.XS};
    flex: 1;
    height: 100vh;
    position: sticky;
    top: 0;
    max-width: 12rem;
  `
)

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

export const StyledImageLink = styled(Link)(
  () => css`
    width: 50px;
    height: auto;
  `
)

export const StyledImage = styled(Image)(
  () => css`
        border-radius: 50%;
        aspect-ratio: 1 / 1;
    `
)

export const StyledNavItemsList = styled.ul(
  () => css`
        list-style-type: none;

        li {
          list-style-type: none;
        }
    `
)