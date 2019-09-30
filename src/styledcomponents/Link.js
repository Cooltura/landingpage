import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black || "black"};
  font-family: ${({ theme }) => theme.fonts.header || "Arial"};
  &:hover {
    color: ${({ theme }) => theme.colors.red || "red"};
  }
`

export default StyledLink
