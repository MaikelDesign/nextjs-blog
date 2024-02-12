import styled, { css } from 'styled-components'
import Link from 'next/link'

export const StyledNav = styled.nav`
    width: 15rem;
    background-color: grey;
    height: 100vh;
    padding: 2rem;
`
export const StyledLink = styled(Link)(
  () => css`
   color: white;
    `
)