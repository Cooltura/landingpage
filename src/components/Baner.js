import React from "react"
import { texts } from "../utils/texts"
import { Link } from "gatsby"

import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"
import StyledButton from "../styledcomponents/Button"
import Img from "../styledcomponents/Img"

import ImgBaner from "../images/imgbaner.png"

const BanerDiv = styled.div`
    font-size:9px;
    height:14em;
    padding:0.5em 0em 0.5em 1em;

    div.baner{
        padding-bottom:1em; 
    }  
   
    ${breakpoint("sm")`
        font-size:14px;
        height:16em;
        padding-left:4.4em;
        div.baner{
            padding-bottom:2em; 
        }  
        padding:${({ padding }) => padding || "0em 0em 0em 2em"};
    `}
    ${breakpoint("md")`
        font-size:18px;
        height:16em;
        div.baner{
            padding-bottom:3em; 
        }
        padding:${({ padding }) => padding || "0em 0em 0em 3em"};
    `}
    ${breakpoint("lg")`
        font-size:18px;
        height:20em;
        div.baner{
            padding-bottom:5em; 
        }
        padding:${({ padding }) => padding || "0em 0em 0em 4.4em"};
    `}
    
    box-shadow: 0em 0.1em .1em 0em ${({ theme }) =>
      theme.colors.gray || "gray"};
    margin-bottom: 0.8em;
   
    margin-top:5.55em;
   
    display:flex; 
    justify-content:space-between;
    align-items:center;

    background:${props => props.theme.colors[props.background] || "#ffffff"};
    color:${({ theme }) => theme.colors.black || "black"};
    font-family:${({ theme }) => theme.fonts.header || "Arial"};
   
    div.button{
        padding-top:2em; 
        a:link{
            text-decoration: none;
        }
    }
    h3{
        font-size:1.94em;
        color:${({ theme }) => theme.colors.red || "red"};
        font-family:${({ theme }) => theme.fonts.header || "Arial"}; 
        line-height:0.2;   
    }   
`

const Baner = () => (
  <BanerDiv background="lightblue">
    <div>
      <div>
        <h3>{texts.banner.header}</h3>
      </div>
      <div> {texts.banner.text}</div>
      <div className="button">
        <StyledButton buttoncolor="red" as={Link} to="/404">
          {texts.banner.button}
        </StyledButton>{" "}
      </div>
    </div>
    <div className="baner">
      <Img src={ImgBaner} width="28" alt="baner"></Img>
    </div>
  </BanerDiv>
)

export default Baner
