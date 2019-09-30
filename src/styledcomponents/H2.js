import styled from "styled-components"

const H2 = styled.h2`
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.black || "black"};
  font-family: ${({ theme }) => theme.fonts.header || "Arial"};
  font-size: 1.4em;
`

export default H2
