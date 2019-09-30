import React from "react"
import Img from "../styledcomponents/Img"
import styled from "styled-components"
import { texts } from "../utils/texts"
import H2 from "../styledcomponents/H2"
import icon1 from "../images/icon-1.png"
import icon2 from "../images/icon-2.png"
import icon3 from "../images/icon-3.png"
import icon4 from "../images/icon-4.png"
import icon5 from "../images/icon-5.png"
import MainDiv from "../styledcomponents/MainDiv"
import breakpoint from "styled-components-breakpoint"

const Service = () => (
  <MainDiv padding="0em 4.4em 1.1em 4.4em">
    <Header>
      <H2>{texts.service.header}</H2>
      <p>{texts.service.text}</p>
    </Header>
    <List>
      <Item>
        <div>
          <Img src={icon1} width="4" alt="Nr1"></Img>
        </div>
        <div className="header">{texts.service.headernr1}</div>
        <div className="text">{texts.service.textnr1}</div>
      </Item>
      <Item>
        <div>
          <Img src={icon2} width="4" alt="Nr2"></Img>
        </div>
        <div className="header">{texts.service.headernr2}</div>
        <div className="text">{texts.service.textnr2}</div>
      </Item>
      <Item>
        <div>
          <Img src={icon3} width="4" alt="Nr3"></Img>
        </div>
        <div className="header">{texts.service.headernr3}</div>
        <div className="text">{texts.service.textnr3}</div>
      </Item>
      <Item>
        <div>
          <Img src={icon4} width="4" alt="Nr4"></Img>
        </div>
        <div className="header">{texts.service.headernr4}</div>
        <div className="text">{texts.service.textnr4}</div>
      </Item>
      <Item>
        <div>
          <Img src={icon5} width="4" alt="Nr5"></Img>
        </div>
        <div className="header">{texts.service.headernr5}</div>
        <div className="text">{texts.service.textnr5}</div>
      </Item>
    </List>
  </MainDiv>
)

const List = styled.div`
  display: left;
  justifycontent: flex-start;
  color: ${props => props.theme.colors.gray || "#ffffff"};
  font-family: ${props => props.theme.fonts.text || "Arial"};
`
const Header = styled.div`
  text-align: center;
`
const Item = styled.div`
  display: flex;
  align-items: center;
  justifycontent: flex-start;
  color: ${props => props.theme.colors.gray || "#ffffff"};
  font-family: ${props => props.theme.fonts.text || "Arial"};

  div.header {
    color: ${props => props.theme.colors.black || "black"};
    font-family: ${props => props.theme.fonts.header || "Arial"};
    padding-left: 0.5em;
  }
  div.text {
    padding-left: 0.2em;
  }
  font-size: 0.7em;
  ${breakpoint("sm")`
    font-size:1em;
    `}
`
export default Service
