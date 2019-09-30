import React from "react"
import { Link } from "gatsby"

import StyledButton from "../styledcomponents/Button"
import MainDiv from "../styledcomponents/MainDiv"

import Img from "../styledcomponents/Img"
import H2 from "../styledcomponents/H2"

import { texts } from "../utils/texts"
import more from "../images/icon-more.png"

import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

const Usage = () => (
  <MainDiv>
    <Header>
      <H2>{texts.usage.header}</H2>
    </Header>
    <Container>
      <Item>
        <div>
          <Img src={texts.usage.usage1.img1} width="20" alt="imgUsage1"></Img>
        </div>
        <div className="header">
          <h4>{texts.usage.usage1.header}</h4>
        </div>
        <div>
          <p>{texts.usage.usage1.text1}</p>
        </div>

        <StyledButton
          buttoncolor="blue"
          as={Link}
          to="/Usage/"
          state={{ usage: texts.usage.usage1 }}
        >
          <Img className="usagebutton" src={more} width="2" alt="more"></Img>
          {texts.usage.button1}
        </StyledButton>
      </Item>
      <Item>
        <div>
          <Img src={texts.usage.usage2.img1} width="20" alt="imgUsage1"></Img>
        </div>
        <div className="header">
          <h4>{texts.usage.usage2.header}</h4>
        </div>
        <div>
          <p>{texts.usage.usage2.text1}</p>
        </div>

        <StyledButton
          buttoncolor="blue"
          as={Link}
          to="/Usage/"
          state={{ usage: texts.usage.usage2 }}
        >
          <Img className="usagebutton" src={more} width="2" alt="more"></Img>
          {texts.usage.button1}
        </StyledButton>
      </Item>
      <Item>
        <div>
          <Img src={texts.usage.usage3.img1} width="20" alt="imgUsage1"></Img>
        </div>
        <div className="header">
          <h4>{texts.usage.usage3.header}</h4>
        </div>
        <div>
          <p>{texts.usage.usage3.text1}</p>
        </div>

        <StyledButton
          buttoncolor="blue"
          as={Link}
          to="/Usage/"
          state={{ usage: texts.usage.usage3 }}
        >
          <Img className="usagebutton" src={more} width="2" alt="more"></Img>
          {texts.usage.button1}
        </StyledButton>
      </Item>
    </Container>

    <Button>
      <StyledButton buttoncolor="red" as={Link} to="/MoreUsages">
        {texts.usage.button2}
      </StyledButton>
    </Button>
  </MainDiv>
)

const Container = styled.div`
  display: column;
  color: ${props =>
    props.theme.colors[props.fontcolor] || props.theme.colors.gray};
  font-family: ${props => props.fontfamily || props.theme.fonts.text};

  ${breakpoint("sm")`
        display: flex;
        justify-content:space-between;      
    `}

  img.usagebutton {
    position: relative;
    top: 0.5em;
    right: 0.2em;
  }
`
const Item = styled.div`
  display: column;
  padding-bottom: 2em;
  text-align: center;
  align-items: stretch;
  ${breakpoint("sm")`
width:34%;
`}
`
const Header = styled.div`
  text-align: center;
`
const Button = styled.div`
  text-align: center;
`
export default Usage

/*
 div{
        padding-top:0.2em;
        padding-bottom:0.2em;
    }

  
    div.usage{
           padding-right:2em;
        }
        */
