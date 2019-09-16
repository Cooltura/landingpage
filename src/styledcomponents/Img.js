import styled from "styled-components"
import breakpoint from 'styled-components-breakpoint'

const Img=styled.img`

   
    &.rotate{
        transform:rotate(180deg); 
    }
    
    &.arrow:hover{
        opacity:0.8;
    }
    width:${props =>props.width/1.5 || '2'}em;
    ${breakpoint('sm')`
    width:${props =>props.width/1.4 || '2'}em;
    `}
    ${breakpoint('md')`
    width:${props =>props.width/1.3 || '2'}em;
    `}
    ${breakpoint('lg')`
    width:${props =>props.width || '2'}em;
    `}
`;

export default Img