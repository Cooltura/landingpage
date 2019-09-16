import React from "react"


import Layout from "../layout/Layout"
import Footer from "../components/Footer"
import Menu from "../components/Menu"


import MainDiv from "../styledcomponents/MainDiv"
import DIV from "../styledcomponents/DIV"
import H2 from "../styledcomponents/H2"
import Img from "../styledcomponents/Img"



const Usage = ({location}) => (
  <Layout>
      
    <Menu></Menu>

    <MainDiv >
        <DIV>
        
        <H2>{location.state.header}</H2>
        </DIV>
        <DIV justifycontent="space-between" padding="0em 0em 1em 0em"  >
           <DIV padding="0em 5em 0em 0em">
           {location.state.text1}
           </DIV>
           <div>
            <Img src={location.state.img1} width='30'></Img>
           </div>
        </DIV>
        <DIV justifycontent="space-between" padding="0em 0em 3em 0em"  >
        <DIV padding="0em 5em 0em 0em">
            <Img src={location.state.img2} width='30'></Img>
           </DIV>
           <div>
           {location.state.text2}
           </div>  
        </DIV>
        
      </MainDiv >

    <Footer></Footer>

  </Layout>
)

export default Usage
