import React from "react"
import { Link } from "gatsby"

import Img from "../styledcomponents/Img"
import styled from "styled-components"
import StyledButton from "../styledcomponents/Button"
import MainDiv from "../styledcomponents/MainDiv"
import { texts } from "../utils/texts"

import ImgHeader from "../images/imgheader.png"
import breakpoint from "styled-components-breakpoint"
const Header = () => (
  <MainDiv padding="0em 2em 2em 4em">
    <Container>
      <div>
        <div>
          <h1>{texts.header.header}</h1>
        </div>
        <div>
          <h3>{texts.header.text}</h3>
        </div>
        <div className="button">
          <center>
            <StyledButton buttoncolor="red" as={Link} to="/404">
              {texts.header.button}
            </StyledButton>
          </center>
        </div>
      </div>
      <div>
        <div>
          <Img src={ImgHeader} width="33" alt="PictureHeader"></Img>
        </div>
      </div>
    </Container>
  </MainDiv>
)

const Container = styled.div`
    display:block; 
    color:${props => props.theme.colors.gray || "#ffffff"};
    font-family:${props => props.theme.fonts.text || "Arial"};
    ${breakpoint("sm")`
    display:flex;
    justify-content:space-between; 
    text-align:left;
    align-items:center;
    `}  
    h3{
        font-size:1em;
       
        ${breakpoint("sm")`
        font-size:1.4em;
        `}
        
        color:${({ theme }) => theme.colors.gray || "gray"};
        font-family:${({ theme }) => theme.fonts.text || "Arial"}; 
    }
    h1{
        font-size:1.4em;
       
        ${breakpoint("sm")`
        font-size:1.95em;
        `}
        
        color:${({ theme }) => theme.colors.black || "black"};
        font-family:${({ theme }) => theme.fonts.header || "Arial"};  
    }
    `
export default Header
