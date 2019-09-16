import React from "react"
import  LandingPage from "../components/LandingPage"
import Layout from "../layout/Layout"
import Footer from "../components/Footer"
import Menu from "../components/Menu"

const IndexPage = () => (
  <Layout>
    <Menu></Menu>
    <LandingPage></LandingPage>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
