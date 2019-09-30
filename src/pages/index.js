import React from "react"

import Slider from "../components/Slider"
import Adventage from "../components/Adventage"
import Baner from "../components/Baner"
import Service from "../components/Service"
import Action from "../components/Action"
import Description from "../components/Description"
import Reference from "../components/Reference"
import Header from "../components/Header"

import Usage from "../components/Usage"
import Layout from "../layout/Layout"
import Footer from "../components/Footer"
import Menu from "../components/Menu"

const IndexPage = () => (
  <Layout>
    <Menu></Menu>
    <Header></Header>

    <Slider></Slider>

    <Description></Description>

    <Action></Action>

    <Adventage></Adventage>

    <Reference></Reference>

    <Usage></Usage>

    <Baner></Baner>

    <Service></Service>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
