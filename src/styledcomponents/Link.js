import styled from "styled-components"
import {Link} from "gatsby"

const StyledLink=styled(Link)`
color:${({theme})=>theme.colors.black || 'black'} ;
&:hover{
        color:${({theme})=>theme.colors.red || 'red'} ;
}
`;

export default StyledLink