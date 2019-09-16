import React from "react"
import {Link} from "gatsby"

import StyledLink from "../styledcomponents/Link"
import StyledButton from "../styledcomponents/Button"
import MainDiv from "../styledcomponents/MainDiv"
import DIV from "../styledcomponents/DIV"
import Img from "../styledcomponents/Img"

import {texts} from "../utils/texts"

import IconFacebook from "../images/icon-facebook.png"
import IconLinkedin from "../images/icon-linkedin.png"
import IconKuptam from "../images/logo-kuptam.png"


const Menu = () => (
    <>

<MainDiv background={({theme})=>theme.colors.verylightblue} padding='0.5em 4em 0.5em 4em' >
                <DIV justifycontent='space-between' >
                    <DIV className='menu'>
                        <div><Img src={IconFacebook} width='2' alt='iconfb'></Img></div>
                        <div className='childimg'><Img src={IconLinkedin} width='2' alt='iconlinked'></Img></div>
                    </DIV>
                    <DIV fontcolor={({theme})=>theme.colors.black} fontfamily={({theme})=>theme.fonts.text} textsize='20px' className='menu'>          
                        <div><a className='link' href="tel:48694487332">{texts.menu.email}</a></div>  
                        <div className='child' ><a className='link' href="mailto:info@innokrea.pl" >{texts.menu.tel}</a>   </div>     
                    </DIV>
                </DIV>
            </MainDiv>
            <MainDiv padding='0.5em 4em 0.5em 4em' className='withshadow'>
                <DIV justifycontent='space-between'>
                    <div>
                    <Img src={IconKuptam} width='10' alt='iconkuptam'></Img>
                    </div>
                    <DIV fontcolor={({theme})=>theme.colors.black} fontfamily={({theme})=>theme.fonts.header} textsize='20px' className='menu'>
                        <div><StyledLink to='/MoreUsages'>{texts.menu.menutext1}</StyledLink></div>
                        <div className='child'><StyledLink to='/404'>{texts.menu.menutext2}</StyledLink></div>
                        <div className='child'><StyledLink to='/404'>{texts.menu.menutext3}</StyledLink></div>
                    <div className='child'><StyledButton buttoncolor='blue' fontcolor='#ffffff' as={Link} to='/404'>{texts.menu.button}</StyledButton></div> 
                    </DIV>
                </DIV>
                
            </MainDiv>

</>
)

export default Menu;