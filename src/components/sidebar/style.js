import styled, { css } from 'styled-components'
import Link from 'next/link'

export const StyledNav = styled.nav`
    background: rgba(0, 0, 0, 0.5);
    padding: 2rem;
    flex: 1;
    height: 100vh;
    position: sticky;
    top: 0;
    max-width: 15rem;
`
export const StyledLink = styled(Link)(
  () => css`
   color: white;
    `
)