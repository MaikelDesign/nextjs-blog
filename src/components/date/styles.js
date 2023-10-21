import styled from 'styled-components'

export const StyledDate = styled.span`
  color: grey;

  // Background CSS change when property is secondary
  // background: ${(props) => (props.secondary ? '#f00' : '#00a8ff')};

  // CSS blok changes when property is secondary
  color: ${(props) =>
    props.secondary &&
    `
        // color: red;
        // text-decoration: underline;
        // padding: .2rem;
        `};
`
