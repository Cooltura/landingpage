import React from "react"
import Img from "../styledcomponents/Img"
import styled from "styled-components"
import { texts } from "../utils/texts"
import H2 from "../styledcomponents/H2"
import MainDiv from "../styledcomponents/MainDiv"
import femax from "../images/femax.png"
import savi from "../images/savi.png"

const Reference = () => (
  <MainDiv>
    <Header>
      <div>
        <H2>{texts.reference.header}</H2>
      </div>
      <div>{texts.reference.text}</div>
    </Header>
    <Item>
      <div>
        <Img src={femax} width="8" alt="imgfemax"></Img>
      </div>
      <div className="reference odd">
        <div className="triangle"></div>
        <div className="textcompany">
          <p>{texts.reference.textcompany1}</p>
        </div>
      </div>
    </Item>
    <Item>
      <div className="reference even">
        <div className="textcompany">
          <p>{texts.reference.textcompany2}</p>
        </div>
        <div className="triangle"></div>
      </div>
      <div>
        <Img src={savi} width="8" alt="imgfemax"></Img>
      </div>
    </Item>
  </MainDiv>
)
const Header = styled.div`
  text-align: center;
`
const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 3em 0em 0em 0em;
  text-align: left;

  div.reference {
    font-size: 1.2em;
    display: flex;
    align-items: center;
    div.textcompany {
      padding: 0em 1.4em 0em 1.4em;
      background: ${({ theme }) => theme.colors.verylightblue || "#ffffff"};
      color: ${({ theme }) => theme.colors.black || "black"};
    }
    &.odd {
      margin-left: 1em;
      div.triangle {
        border-top: 1em solid transparent;
        border-bottom: 1em solid transparent;
        border-right: 1em solid
          ${({ theme }) => theme.colors.verylightblue || "#ffffff"};
        border-left: 0.5em solid transparent;
      }
    }
    &.even {
      margin-right: 1em;
      div.triangle {
        border-top: 1em solid transparent;
        border-bottom: 1em solid transparent;
        border-right: 0.5em solid transparent;
        border-left: 1em solid
          ${({ theme }) => theme.colors.verylightblue || "#ffffff"};
      }
    }
  }
`

export default Reference
