import React from "react"
import {texts} from '../utils/texts'

import MainDiv from "../styledcomponents/MainDiv"
import DIV from "../styledcomponents/DIV"
import Img from "../styledcomponents/Img"
import Hr from "../styledcomponents/Hr"

import IconFacebookWhite from '../images/icon-facebook-white.png'
import IconLinkedinWhite from '../images/icon-linkedin-white.png'
import IconGooglePlay from '../images/icon-googleplay.png'

const Footer = () => (
    <>
    <MainDiv background='darkblue' padding='0em 4.4em 1.1em 4.4em'>
    <DIV justifycontent='space-between' textalgin='left' fontcolor='#ffffff' >
        <div className='footer'>
            <div><h4>{texts.footer.header[0]}</h4></div>
            <div>{texts.footer.text[0][0]}</div>
            <div>{texts.footer.text[0][1]}</div>
            <div>{texts.footer.text[0][2]}</div>
            <div>{texts.footer.text[0][3]}</div>
            <div>{texts.footer.text[0][4]}</div>
        </div>
        <div className='footer'>
            <div><h4>{texts.footer.header[1]}</h4></div>
            <div>{texts.footer.text[1][0]}</div>
            <div>{texts.footer.text[1][1]}</div>
            <br></br>
            <div>{texts.footer.text[1][2]} </div>
            <div>{texts.footer.text[1][3]}</div>
        </div>
        <div className='footer'>
                <br></br>
                <div className='imgfooter'>
                    <div><Img src={IconLinkedinWhite} width='3' alt='iconLinked'></Img></div>
                    <div><Img src={IconFacebookWhite} width='3' alt='iconFb'></Img></div>
                </div>
            
                <div>  <Img src={IconGooglePlay} width='8' alt='icongoogle'></Img></div>
            
            
        </div>

    </DIV>
    </MainDiv>
    <MainDiv background='darkblue' fontcolor='#ffffff' padding='0' textalgin='center'>
    <Hr></Hr>
    {texts.footer.bottomtext}
    </MainDiv>
    </>
)

export default Footer;