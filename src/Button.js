import styled from "styled-components"
const StyledButton=styled.button`
    
    line-height:1.5;
    border:0px;
    font-size:1em;
    color:${props =>props.fontcolor || '#ffffff'};
    padding:${props =>props.padding || '0.8em 1.6em'} ;
    font-family:${({theme}) =>theme.fonts.header || 'Arial'};  
    background-color:${props =>props.buttoncolor || props.theme.colors.blue};
   
    
    &:hover{
        opacity:0.8;
    }
`;

export default StyledButton
