import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/Layout"
import Footer from "../components/Footer"
import Menu from "../components/Menu"

import StyledButton from "../styledcomponents/Button"
import MainDiv from "../styledcomponents/MainDiv"
import H2 from "../styledcomponents/H2"
import Img from "../styledcomponents/Img"
import styled from "styled-components"
import breakpoint from "styled-components-breakpoint"

import more from "../images/icon-more.png"

import { texts } from "../utils/texts"

const MoreUsages = props => (
  <Layout>
    <Menu></Menu>

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
          <div>
            <StyledButton
              buttoncolor="blue"
              as={Link}
              to="/Usage/"
              state={{ usage: texts.usage.usage1 }}
            >
              <Img
                className="usagebutton"
                src={more}
                width="2"
                alt="more"
              ></Img>
              {texts.usage.button1}
            </StyledButton>
          </div>
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
          <div>
            <StyledButton
              buttoncolor="blue"
              as={Link}
              to="/Usage/"
              state={{ usage: texts.usage.usage2 }}
            >
              <Img
                className="usagebutton"
                src={more}
                width="2"
                alt="more"
              ></Img>
              {texts.usage.button1}
            </StyledButton>
          </div>
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
          <div>
            <StyledButton
              buttoncolor="blue"
              as={Link}
              to="/Usage/"
              state={{ usage: texts.usage.usage3 }}
            >
              <Img
                className="usagebutton"
                src={more}
                width="2"
                alt="more"
              ></Img>
              {texts.usage.button1}
            </StyledButton>
          </div>
        </Item>
      </Container>

      <Container>
        <Item>
          <div>
            <Img src={texts.usage.usage4.img2} width="20" alt="imgUsage1"></Img>
          </div>
          <div className="header">
            <h4>{texts.usage.usage4.header}</h4>
          </div>
          <div>
            <p>{texts.usage.usage4.text1}</p>
          </div>
          <div>
            <StyledButton
              buttoncolor="blue"
              as={Link}
              to="/Usage/"
              state={{ usage: texts.usage.usage4 }}
            >
              <Img
                className="usagebutton"
                src={more}
                width="2"
                alt="more"
              ></Img>
              {texts.usage.button1}
            </StyledButton>
          </div>
        </Item>
        <Item>
          <div>
            <Img src={texts.usage.usage5.img1} width="20" alt="imgUsage1"></Img>
          </div>
          <div className="header">
            <h4>{texts.usage.usage5.header}</h4>
          </div>
          <div>
            <p>{texts.usage.usage4.text1}</p>
          </div>
          <div>
            <StyledButton
              buttoncolor="blue"
              as={Link}
              to="/Usage/"
              state={{ usage: texts.usage.usage5 }}
            >
              <Img
                className="usagebutton"
                src={more}
                width="2"
                alt="more"
              ></Img>
              {texts.usage.button1}
            </StyledButton>
          </div>
        </Item>
      </Container>
    </MainDiv>

    <Footer></Footer>
  </Layout>
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

export default MoreUsages
