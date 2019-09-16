import styled from "styled-components"
import breakpoint from 'styled-components-breakpoint'

const BanerDiv=styled.div`
    height:16em;
    margin-top:5.55em;
    padding-left:4.4em;
    display:flex; 
    justify-content:space-between;
    align-items:center;
    background:${props => props.theme.colors[props.background ] || "#ffffff" };
    font-size:1.4em;
    color:${({theme})=>theme.colors.black ||'black'};
    font-family:${({theme})=> theme.fonts.header || 'Arial'};

    div.baner{
        padding-bottom:1em; 
        }
   
    
    div.button{
        padding-top:2em; 
        a:link{
            text-decoration: none;
        }
    }
    h3{
        font-size:1.94em;
        color:${({theme})=>theme.colors.red ||'red'};
        font-family:${({theme})=> theme.fonts.header || 'Arial'}; 
        line-height:0.2;   
    }   

    font-size:9px;
    padding:0.5em 0em 0.5em 1em;

    ${breakpoint('sm')`
    font-size:12px;
    height:19.4em;

    div.baner{
        padding-bottom:2em; 
    }
    
    padding:${({padding})=>padding || "0em 0em 0em 2em"};
    `}
    ${breakpoint('md')`
    font-size:15px;

    div.baner{
        padding-bottom:3em; 
    }

    padding:${({padding})=>padding || "0em 0em 0em 3em"};
    `}
    ${breakpoint('lg')`
    font-size:18px;
    div.baner{
        padding-bottom:5em; 
    }
    padding:${({padding})=>padding || "0em 0em 0em 4.4em"};
    `}
    
    
    -moz-box-shadow: 0em 0.1em .1em 0em ${({theme}) =>theme.colors.gray || 'gray'};
    -webkit-box-shadow: 0em 0.1em .1em 0em ${({theme}) =>theme.colors.gray || 'gray'};
    box-shadow: 0em 0.1em .1em 0em ${({theme}) =>theme.colors.gray || 'gray'};
    margin-bottom: 0.8em;
   

`;

export default BanerDiv;