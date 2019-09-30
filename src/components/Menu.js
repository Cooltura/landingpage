import React from "react"
import { Link } from "gatsby"

import StyledLink from "../styledcomponents/Link"
import StyledButton from "../styledcomponents/Button"
import MainDiv from "../styledcomponents/MainDiv"

import Img from "../styledcomponents/Img"

import { texts } from "../utils/texts"

import IconFacebook from "../images/icon-facebook.png"
import IconLinkedin from "../images/icon-linkedin.png"
import IconKuptam from "../images/logo-kuptam.png"

import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

const Menu = () => (
  <>
    <MainDiv background="verylightblue" padding="0.5em 4em 0.5em 4em">
      <Container>
        <Item>
          <div>
            <Img src={IconFacebook} width="2" alt="iconfb"></Img>
          </div>
          <div className="childimg">
            <Img src={IconLinkedin} width="2" alt="iconlinked"></Img>
          </div>
        </Item>
        <Item>
          <div>
            <a className="link" href="tel:48694487332">
              {texts.menu.email}
            </a>
          </div>
          <div className="child">
            <a className="link" href="mailto:info@innokrea.pl">
              {texts.menu.tel}
            </a>{" "}
          </div>
        </Item>
      </Container>
    </MainDiv>
    <MainDiv padding="0.5em 4em 0.5em 4em" className="withshadow">
      <Container>
        <Item>
          <Img src={IconKuptam} width="10" alt="iconkuptam"></Img>
        </Item>

        <Item>
          <div>
            <StyledLink to="/MoreUsages">{texts.menu.menutext1}</StyledLink>
          </div>
          <div className="child">
            <StyledLink to="/404">{texts.menu.menutext2}</StyledLink>
          </div>
          <div className="child">
            <StyledLink to="/404">{texts.menu.menutext3}</StyledLink>
          </div>
        </Item>
        <Item>
          <StyledButton
            buttoncolor="blue"
            fontcolor="#ffffff"
            as={Link}
            to="/404"
          >
            {texts.menu.button}
          </StyledButton>
        </Item>
      </Container>
    </MainDiv>
  </>
)
const Container = styled.div`
  display: column;
  justify-content: space-around;

  text-align: center;
  align-items: center;

  ${breakpoint("sm")`
    display:flex;
    justify-content:space-between;
  
    `}
`

const Item = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.text};
  padding-bottom: 0.5em;

  ${breakpoint("sm")`
  display:flex;
  padding-bottom:0em;
  `}

  div.child {
    ${breakpoint("sm")`   
    padding-left:1em;   
    `}
  }
  div.childimg {
    ${breakpoint("sm")`   
    padding-left:0.5em;   
    `}
  }
`

export default Menu
