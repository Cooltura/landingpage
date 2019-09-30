import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

const MainDiv = styled.div`
    background:${props => props.theme.colors[props.background] || "#ffffff"};
    align-items:${({ alignitems }) => alignitems || "center"};
    text-align:${({ textalign }) => textalign || "left"};  
    color:${props => props.fontcolor || props.theme.colors.gray};
    height:${props => props.height || "auto"};
    
    font-size:14px;
    padding:1em 0.5em 1em 0.5em;
 

    ${breakpoint("sm")`
    font-size:14px;
   
    padding:${({ padding }) => padding || "0em 2em 0em 2em"};
    `}
    ${breakpoint("md")`
    font-size:15px;
    padding:${({ padding }) => padding || "0em 3em 0em 3em"};
    `}
    ${breakpoint("lg")`
    font-size:18px;
    padding:${({ padding }) => padding || "0em 4.4em 0em 4.4em"};
    `}
    
    &.withshadow{
        box-shadow: 0em 0.1em 0.3em 0em ${({ theme }) =>
          theme.colors.gray || "gray"};
        margin-bottom: 0.3em;
    }
    a:link{
        text-decoration: none;
        color:currentcolor;
    }
    a.link:hover{
        border-bottom:1px solid currentcolor;
    }

`

export default MainDiv
