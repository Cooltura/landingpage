import React from "react"
import styled from "styled-components"
import femax from '../images/femax.png'
import savi from '../images/savi.png'
import breakpoint from 'styled-components-breakpoint'
import {texts} from '../utils/texts'
const Styleddiv =styled.div`

    background:${({theme}) =>theme.colors.verylightblue || 'blue'}; 
    justify-content:center;
    
    display:flex;
    width:100%;   
    font-size:9px;
    img {
       width:${props =>props.width/2 || '2'}em;
       height:${props =>props.width/6 || '1'}em;
    }
    height:13em;

    -moz-box-shadow: 0em 0.1em .1em 0em ${({theme}) =>theme.colors.gray || 'gray'};
    -webkit-box-shadow: 0em 0.1em .1em 0em ${({theme}) =>theme.colors.gray || 'gray'};
    box-shadow: 0em 0.1em .1em 0em ${({theme}) =>theme.colors.gray || 'gray'};
    margin-bottom: 0.8em;

    
    ${breakpoint('sm')`
    font-size:12px;
    img{
      width:${props =>props.width/2 || '2'}em;
      height:${props =>props.width/6 || '1'}em;
    }
 
    `}
    ${breakpoint('md')`
    font-size:15px;
    img{
      width:${props =>props.width/2 || '2'}em;
      height:${props =>props.width/6 || '2'}em;
    }
   
    `}
    ${breakpoint('m_l')`
    font-size:16px;
    img{
      width:${props =>props.width/1.5 || '2'}em;
      height:${props =>props.width/4.5 || '2'}em;
    }
   
    `}
    ${breakpoint('lg')`
    font-size:18px;
    img{    
      width:${props =>props.width/1.5|| '2'}em;
      height:${props =>props.width/4.5 || '2'}em;
    }
  
    `}
   
`;

const StyledItem =styled.div`
    
    opacity:0;
   

    position:absolute;
  
    animation: animation 12s infinite;
    animation-name: animation;
    animation-delay:${props=> props.delay || 0}s;
    animation-timing-function:linear;
    
    margin-top:7em;

      @keyframes animation {
           0%  { 
            opacity:0;  
            right:0%;
          }
           50%  { opacity:1;}
           100%  {opacity:0;
            right:100%;
          }
        }
      h2{
        font-size:1.4em;
        font-family:${({theme})=> theme.fonts.header || 'Arial'};
        color:${({theme}) =>theme.colors.gray || 'gray'};
      }
    
`;

const Slider = () => (
  <>
    <Styleddiv width='10'>
      <h2>{texts.slider.header}</h2>
      <StyledItem delay='0'  ><img src={savi} alt='img'></img></StyledItem>
      <StyledItem delay='-2'  ><img src={femax} alt='img'></img></StyledItem>
      <StyledItem delay='-4'  ><img  src={savi} alt='img'></img></StyledItem>
      <StyledItem delay='-6'  ><img  src={femax} alt='img'></img></StyledItem>
      <StyledItem delay='-8'  ><img  src={savi} alt='img'></img></StyledItem>
      <StyledItem delay='-10' ><img  src={femax} alt='img'></img></StyledItem>
      
    </Styleddiv>
    </>
  )
  
  export default Slider