import React from "react"
import {Link} from "gatsby"

import Layout from "../layout/Layout"
import Footer from "../components/Footer"
import Menu from "../components/Menu"

import StyledButton from "../styledcomponents/Button"
import MainDiv from "../styledcomponents/MainDiv"
import DIV from "../styledcomponents/DIV"
import H2 from "../styledcomponents/H2"
import Img from "../styledcomponents/Img"

import imgUsage from '../images/imgUsage.png'
import more from '../images/icon-more.png'


import Usage2_1 from '../images/imgUsage2.jpg'
import Usage2_2 from '../images/imgUsage2.2.jpg'

import {texts} from "../utils/texts"

const MoreUsages = props => (
  <Layout>
    <Menu></Menu>

    <MainDiv >
        <DIV>
                    <H2>{texts.usage.header}</H2>
        </DIV>
        <DIV justifycontent="space-between" padding="0em 0em 0em 0em" alignitems='top' >
            <div className='usage'>
              <div><Img src={imgUsage} width='20' alt="imgUsage1"></Img></div>
              <div className='header'><h4>{texts.usage.header1}</h4></div>
              <div><p>{texts.usage.text1}</p></div>
            </div>
            <div className='usage'>
              <div><Img src={Usage2_1} width='20' alt="imgUsage1"></Img></div>
              <div className='header'><h4>{texts.usage.header2}</h4></div>
              <div><p>{texts.usage.text2}</p></div>
            </div>
            <div className='usage'>
              <div><Img src={imgUsage} width='20' alt="imgUsage1"></Img></div>
              <div className='header'><h4>{texts.usage.header3}</h4></div>
              <div><p>{texts.usage.text3}</p></div>
            </div>
        </DIV>
        <DIV justifycontent="space-around" padding="0em 0em 3em 0em" alignitems='center' >
            <div><StyledButton buttoncolor='blue'  as={Link} to='/404'><Img className='usagebutton' src={more} width='2' alt='more'></Img>{texts.usage.button1}</StyledButton></div>
            <div><StyledButton buttoncolor='blue'  as={Link} to='/404'><Img className='usagebutton' src={more} width='2' alt='more'></Img>{texts.usage.button1}</StyledButton></div>
            <div><StyledButton buttoncolor='blue'  as={Link} to='/404'><Img className='usagebutton' src={more} width='2' alt='more'></Img>{texts.usage.button1}</StyledButton></div>
            

            </DIV>
        <DIV  padding="0em 0em 3em 0em" alignitems='top' >
            <div className='usage'>
              <div><Img src={imgUsage} width='20' alt="imgUsage1"></Img></div>
              <div className='header'><h4>{texts.usage.header4}</h4></div>
              <div><p>{texts.usage.text4}</p></div>
              <div><StyledButton buttoncolor='blue'  as={Link} to='/404'><Img className='usagebutton' src={more} width='2' alt='more'></Img>{texts.usage.button1}</StyledButton></div>
           
            </div>
            <div className='usage'>
              <div><Img src={imgUsage} width='20' alt="imgUsage1"></Img></div>
              <div className='header'><h4>{texts.usage.header5}</h4></div>
              <div><p>{texts.usage.text5}</p></div>
              <div><StyledButton buttoncolor='blue'   as={Link} to='/404'><Img className='usagebutton' src={more} width='2' alt='more'></Img>{texts.usage.button1}</StyledButton></div>
     
            </div>
        </DIV>
        
      </MainDiv >

    <Footer></Footer>

  </Layout>
)

export default MoreUsages
