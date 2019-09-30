import React from "react"

import Img from "../styledcomponents/Img"
import styled from "styled-components"
import { texts } from "../utils/texts"
import H2 from "../styledcomponents/H2"

import DescriptionPicture1 from "../images/DescriptionPicture1.png"
import DescriptionPicture2 from "../images/DescriptionPicture2.png"
import MainDiv from "../styledcomponents/MainDiv"
import breakpoint from "styled-components-breakpoint"

const Description = () => (
  <MainDiv>
    <Container>
      <div>
        <Img src={DescriptionPicture1} width="30" alt="image1"></Img>
      </div>
      <div>
        <center>
          <H2> {texts.description.header1}</H2>{" "}
        </center>
        <ul>
          <li> {texts.description.text1[0]}</li>
          <li>{texts.description.text1[1]}</li>
          <li>{texts.description.text1[2]}</li>
          <li>{texts.description.text1[3]}</li>
          <li>{texts.description.text1[4]}</li>
        </ul>
      </div>
    </Container>
    <Container>
      <div>
        <center>
          <H2> {texts.description.header2}</H2>{" "}
        </center>
        <ul>
          <li> {texts.description.text2[0]}</li>
          <li>{texts.description.text2[1]}</li>
          <li>{texts.description.text2[2]}</li>
          <li>{texts.description.text2[3]}</li>
          <li>{texts.description.text2[4]}</li>
        </ul>
      </div>
      <div>
        <Img src={DescriptionPicture2} width="27" alt="image2"></Img>
      </div>
    </Container>
  </MainDiv>
)

const Container = styled.div`
  display: block;
  color: ${props => props.theme.colors.gray || "#ffffff"};
  font-family: ${props => props.theme.fonts.text || "Arial"};
  ${breakpoint("sm")`
    display:flex;
    justify-content:space-between; 
    text-align:left;
    align-items:center;
    `}
  padding:0.5em 0em 0.5em 0em;
`

export default Description
