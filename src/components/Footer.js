import React from "react"
import { texts } from "../utils/texts"

import MainDiv from "../styledcomponents/MainDiv"
import Img from "../styledcomponents/Img"
import Hr from "../styledcomponents/Hr"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

import IconFacebookWhite from "../images/icon-facebook-white.png"
import IconLinkedinWhite from "../images/icon-linkedin-white.png"
import IconGooglePlay from "../images/icon-googleplay.png"

const Footer = () => (
  <>
    <MainDiv
      background="darkblue"
      padding="0em 4.4em 1.1em 4.4em"
      fontcolor="#ffffff"
    >
      <Container>
        <div className="footer">
          <div>
            <h4>{texts.footer.header[0]}</h4>
          </div>
          <div>{texts.footer.text[0][0]}</div>
          <div>{texts.footer.text[0][1]}</div>
          <div>{texts.footer.text[0][2]}</div>
          <div>{texts.footer.text[0][3]}</div>
          <div>{texts.footer.text[0][4]}</div>
        </div>
        <div className="footer">
          <div>
            <h4>{texts.footer.header[1]}</h4>
          </div>
          <div>{texts.footer.text[1][0]}</div>
          <div>{texts.footer.text[1][1]}</div>
          <br></br>
          <div>{texts.footer.text[1][2]} </div>
          <div>{texts.footer.text[1][3]}</div>
        </div>
        <div className="">
          <div className="icon">
            <div>
              <Img src={IconLinkedinWhite} width="3" alt="iconLinked"></Img>
            </div>
            <div>
              <Img src={IconFacebookWhite} width="3" alt="iconFb"></Img>
            </div>
          </div>

          <div>
            {" "}
            <Img src={IconGooglePlay} width="8" alt="icongoogle"></Img>
          </div>
        </div>
      </Container>
    </MainDiv>
    <MainDiv
      background="darkblue"
      fontcolor="#ffffff"
      padding="0"
      textalign="center"
    >
      <Hr></Hr>
      {texts.footer.bottomtext}
    </MainDiv>
  </>
)

const Container = styled.div`
  display: block;
  justify-content: center;
  text-align: center;
  align-items: center;
  div {
    padding-top: 0.2em;
    padding-bottom: 0.2em;
  }
  ${breakpoint("sm")`
    display:flex;
    justify-content:space-between;
    text-align:left;

 

    `}

  color:#ffffff;
  font-family: ${props => props.fontfamily || props.theme.fonts.text};

  div.icon {
    ${breakpoint("sm")`
        display:flex;
        justify-content:space-between; 
        `}
  }
`

export default Footer
