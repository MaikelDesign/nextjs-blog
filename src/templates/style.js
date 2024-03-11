import styled, { css } from 'styled-components'

export const StyledMain = styled.main`
`

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  min-height: 100vh;
  background: blue;
`

export const StyledPageContent = styled.div(
  ({ theme: { SPACINGS }}) => css`
    flex: 3;
    background: black;
    border-radius: ${SPACINGS.SM};
    margin: ${SPACINGS.SM};
    padding: ${SPACINGS.MD};
    height: calc(100vh - 1.6rem);
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
`
)