import React from "react"
import { Link } from "gatsby"

import StyledButton from "../styledcomponents/Button"

import Img from "../styledcomponents/Img"
import styled from "styled-components"
import { texts } from "../utils/texts"
import H2 from "../styledcomponents/H2"
import icon1 from "../images/icon-1.png"
import icon2 from "../images/icon-2.png"
import icon3 from "../images/icon-3.png"
import icon4 from "../images/icon-4.png"
import MainDiv from "../styledcomponents/MainDiv"
import breakpoint from "styled-components-breakpoint"

const Action = () => (
  <MainDiv
    background="verylightblue"
    textalign="center"
    padding="1.1em 4.4em 2em 4.4em"
  >
    <Header>
      <H2>{texts.action.header}</H2>
    </Header>
    <List>
      <Item>
        <div>
          <Img src={icon1} width="4" alt="Nr1"></Img>
        </div>
        <div className="action">
          <div className="header">{texts.action.headers[0]}</div>{" "}
          <div>{texts.action.texts[0]}</div>
        </div>
      </Item>
      <Item>
        <div>
          <Img src={icon2} width="4" alt="Nr2"></Img>
        </div>
        <div className="action">
          <div className="header">{texts.action.headers[1]}</div>{" "}
          <div>{texts.action.texts[1]}</div>
        </div>
      </Item>
      <Item>
        <div>
          <Img src={icon3} width="4" alt="Nr3"></Img>
        </div>
        <div className="action">
          <div className="header">{texts.action.headers[2]}</div>{" "}
          <div>{texts.action.texts[2]}</div>
        </div>
      </Item>
      <Item>
        <div>
          <Img src={icon4} width="4" alt="Nr4"></Img>
        </div>
        <div className="action">
          <div className="header">{texts.action.headers[3]}</div>{" "}
          <div>{texts.action.texts[3]}</div>
        </div>
      </Item>
    </List>
    <Button>
      <StyledButton buttoncolor="blue" as={Link} to="/404">
        {texts.action.button}
      </StyledButton>
    </Button>
  </MainDiv>
)
const Header = styled.div`
  text-align: center;
`
const Button = styled.div`
  padding-top: 2em;
`
const List = styled.div`
  display: block;
  justify-content: right;
  color: ${props => props.theme.colors.gray || "#ffffff"};
  font-family: ${props => props.theme.fonts.text || "Arial"};
  ${breakpoint("sm")`
    display:flex;
    justify-content:space-around;
    `}
`

const Item = styled.div`
  display: inline;

  ${breakpoint("sm")`
    display:flex;
    `}

  align-items:center;

  color: ${props => props.theme.colors.gray || "#ffffff"};
  font-family: ${props => props.theme.fonts.text || "Arial"};
  div.action {
    margin-left: 0.5em;
  }
  div.header {
    color: ${props => props.theme.colors.black || "black"};
    font-family: ${props => props.theme.fonts.header || "Arial"};
  }
`
export default Action
