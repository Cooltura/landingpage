import styled from "styled-components"
import breakpoint from 'styled-components-breakpoint'

const MainDiv=styled.div`
    background:${({background})=>background || "#ffffff"};
    
    align-items:${({alignitems})=>alignitems || "center"};
    text-align:${({textalgin}) => textalgin || 'left'};  
    color:${props=>props.fontcolor || props.theme.colors.gray};
    height:${props=>props.height || 'auto'};

    font-size:9px;
    padding:0.5em 1em 0.5em 1em;
    ${breakpoint('sm')`
    font-size:12px;
    padding:${({padding})=>padding || "0em 2em 0em 2em"};
    `}
    ${breakpoint('md')`
    font-size:15px;
    padding:${({padding})=>padding || "0em 3em 0em 3em"};
    `}
    ${breakpoint('lg')`
    font-size:18px;
    padding:${({padding})=>padding || "0em 4.4em 0em 4.4em"};
    `}
    
    &.withshadow{
        -moz-box-shadow: 0em 0.1em 0.3em 0em ${({theme}) =>theme.colors.gray || 'gray'};
        -webkit-box-shadow: 0em 0.1em 0.3em 0em ${({theme}) =>theme.colors.gray || 'gray'};
        box-shadow: 0em 0.1em 0.3em 0em ${({theme}) =>theme.colors.gray || 'gray'};
        margin-bottom: 0.3em;
    }
`;


export default MainDiv;