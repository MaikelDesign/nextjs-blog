import styled, { css } from 'styled-components'

export const StyledMain = styled.main``

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  min-height: 100vh;
  background: blue;
`

export const StyledPageContent = styled.div(
  ({ theme: { SPACINGS } }) => css`
    flex: 3;
    background: #101010;
    border-radius: ${SPACINGS.XS};
    margin: ${SPACINGS.XS};
    padding: ${SPACINGS.MD};
    height: calc(100vh - ${SPACINGS.XS} * 2);
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
)
