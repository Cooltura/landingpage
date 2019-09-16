import React from "react"
import {Link} from "gatsby"

import Slider from './Slider'
import Adventage from "./Adventage"

import StyledLink from "../styledcomponents/Link"
import StyledButton from "../styledcomponents/Button"
import MainDiv from "../styledcomponents/MainDiv"
import BanerDiv from "../styledcomponents/BanerDiv"
import DIV from "../styledcomponents/DIV"
import H2 from "../styledcomponents/H2"
import Hr from "../styledcomponents/Hr"
import Img from "../styledcomponents/Img"

import {texts} from "../utils/texts"

import ImgHeader from '../images/imgheader.png'
import ImgBaner from '../images/imgbaner.png'
import DescriptionPicture1 from '../images/DescriptionPicture1.png'
import DescriptionPicture2 from '../images/DescriptionPicture2.png'
import icon1 from '../images/icon-1.png'
import icon2 from '../images/icon-2.png'
import icon3 from '../images/icon-3.png'
import icon4 from '../images/icon-4.png'
import icon5 from '../images/icon-5.png'
import femax from '../images/femax.png'
import savi from '../images/savi.png'


import imgUsage from '../images/imgUsage.png'
import more from '../images/icon-more.png'
import IconFacebookWhite from '../images/icon-facebook-white.png'
import IconLinkedinWhite from '../images/icon-linkedin-white.png'
import IconGooglePlay from '../images/icon-googleplay.png'
import IconFacebook from '../images/icon-facebook.png'
import IconLinkedin from '../images/icon-linkedin.png'
import IconKuptam from '../images/logo-kuptam.png'



export default class LandingPage extends React.Component  {
    render(){
        return (
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
                        <div><StyledLink to='/404'>{texts.menu.menutext1}</StyledLink></div>
                        <div className='child'><StyledLink to='/404'>{texts.menu.menutext2}</StyledLink></div>
                    <div className='child'><StyledButton buttoncolor={({theme})=>theme.colors.blue} fontcolor='#ffffff' as={Link} to='/404'>{texts.menu.button}</StyledButton></div> 
                    </DIV>
                </DIV>
                
            </MainDiv>
                {/* ----------------HEADER PART-------------------- */}
            <MainDiv padding='0em 2em 1em 4em'>
                <DIV justifycontent='space-between' textalgin='left'>
                    <div>
                        <div><h1>{texts.header.header}</h1></div>
                        <div><h3>{texts.header.text}</h3></div>    
                        <div className="button">
                        <center> 
                            <StyledButton buttoncolor={({theme})=>theme.colors.red} as={Link} to='/404'>{texts.header.button}</StyledButton>
                        </center> 
                        </div>
                    </div>
                    <div>
                        <div><Img src={ImgHeader} width='33' alt="PictureHeader"></Img></div>
                    </div>
                </DIV>
            </MainDiv>
                    {/* ----------------SLIDER PART-------------------- */}
            <Slider></Slider>
                    {/* ----------------DESCRIPTION PART-------------------- */}
            <MainDiv>
                <DIV justifycontent='space-between' padding='1em 0em 0.5em 0em' textalgin='left'>
                    <div>
                        <Img src={DescriptionPicture1} width='30' alt="image1"></Img>
                    </div>
                    <div>  
                       <center><H2> {texts.description.header1}</H2> </center> 
                        <ul>
                            <li> {texts.description.text1[0]}</li>
                            <li>{texts.description.text1[1]}</li>
                            <li>{texts.description.text1[2]}</li>
                            <li>{texts.description.text1[3]}</li>
                            <li>{texts.description.text1[4]}</li>
                        </ul>
                       
                    </div>
                </DIV>
                <DIV justifycontent='space-between' padding='0.5em 0em 0.5em 0em' textalgin='left'>
                    <div>   
                        <center><H2> {texts.description.header2}</H2> </center>
                        <ul>
                            <li> {texts.description.text2[0]}</li>
                            <li>{texts.description.text2[1]}</li>
                            <li>{texts.description.text2[2]}</li>
                            <li>{texts.description.text2[3]}</li>
                            <li>{texts.description.text2[4]}</li>
                        </ul>
                    </div>
                    <div>
                        <Img src={DescriptionPicture2} width='27' alt="image2"></Img>
                    </div>
                </DIV>
            </MainDiv>

                    {/* ----------------ACTION PART-------------------- */}
            <MainDiv background={({theme})=>theme.colors.verylightblue} textalgin="center">
                <DIV>
                    <H2>{texts.action.header}</H2>
                </DIV>
                <DIV justifycontent='space-around'>
                    <DIV>
                    <div><Img src={icon1} width='4' alt="Nr1" ></Img></div>
                    <div className="action"><div className='header'>{texts.action.headers[0]}</div> <div>{texts.action.texts[0]}</div></div>   
                    </DIV>
                    <DIV>
                    <div><Img src={icon2} width='4' alt="Nr2"></Img></div>
                    <div className="action"><div className='header'>{texts.action.headers[1]}</div> <div>{texts.action.texts[1]}</div></div>    
                    </DIV>
                    <DIV>
                    <div><Img src={icon3} width='4' alt="Nr3"></Img></div>
                    <div className="action"><div className='header' >{texts.action.headers[2]}</div> <div>{texts.action.texts[2]}</div></div>  
                    </DIV>
                    <DIV>
                    <div><Img src={icon4} width='4' alt="Nr4"></Img></div>
                    <div className="action"><div className='header'>{texts.action.headers[3]}</div> <div>{texts.action.texts[3]}</div></div>  
                    </DIV>      
                </DIV>
                <DIV padding="3em 0em 3em 0em">
                <center> <StyledButton buttoncolor={({theme})=>theme.colors.blue} as={Link} to='/404'>{texts.action.button}</StyledButton>  </center>          
                </DIV> 
            </MainDiv>    

                     {/* ----------------Adventage PART-------------------- */}

                    <Adventage></Adventage>

                    {/* ----------------REFERENCE PART-------------------- */}
            <MainDiv>
                <DIV textalgin="center">
                    <div>
                        <div><H2>{texts.reference.header}</H2></div>
                        <div>{texts.reference.text}</div>
                    </div>
                </DIV>
                <DIV padding="3em 0em 0em 0em" textalgin='left'>
                        <div><Img src={femax} width='8' alt="imgfemax"></Img></div>  
                        <div className='reference odd'><div className='triangle'></div><div className='textcompany'><p>{texts.reference.textcompany1}</p></div></div> 
                </DIV>
                <DIV padding="3em 0em 0em 0em" textalgin='left'>    
                        <div className='reference even'><div className='textcompany'><p>{texts.reference.textcompany2}</p></div><div className='triangle'></div></div>  
                        <div><Img src={savi} width='8' alt="imgfemax"></Img></div>  
                </DIV>
            </MainDiv>

                    {/* ----------------USAGE PART-------------------- */}
            <MainDiv>
                <DIV>
                    <H2>{texts.usage.header}</H2>
                </DIV>
                <DIV justifycontent="space-between" padding="0em 0em 3em 0em">
                    <div>
                        <div><Img src={imgUsage} width='20' alt="imgUsage1"></Img></div>
                        <div className='header'><h4>{texts.usage.header}</h4></div>
                        <div><p>{texts.usage.text}</p></div>
                        <div><StyledButton buttoncolor={({theme})=>theme.colors.blue}  as={Link} to='/404'><Img className='usagebutton' src={more} width='2' alt='more'></Img>{texts.usage.button1}</StyledButton></div>
                    </div>
                    <div>
                        <div><Img src={imgUsage} width='20' alt="imgUsage1"></Img></div>
                        <div className='header'><h4>{texts.usage.header}</h4></div>
                        <div><p>{texts.usage.text}</p></div>
                        <div><StyledButton buttoncolor={({theme})=>theme.colors.blue}   as={Link} to='/404'><Img className='usagebutton' src={more} width='2' alt='more'></Img>{texts.usage.button1}</StyledButton></div>
                    </div>
                    <div>
                        <div><Img src={imgUsage} width='20' alt="imgUsage1"></Img></div>
                        <div className='header'><h4>{texts.usage.header}</h4></div>
                        <div><p>{texts.usage.text}</p></div>
                        <div><StyledButton buttoncolor={({theme})=>theme.colors.blue}   as={Link} to='/404'><Img className='usagebutton' src={more} width='2' alt='more'></Img>{texts.usage.button1}</StyledButton></div>
                    </div>
                </DIV>
                <DIV>
                    <StyledButton buttoncolor={({theme})=>theme.colors.red}  as={Link} to='/404'>{texts.usage.button2}</StyledButton>       
                </DIV>
            </MainDiv>

                    {/* ----------------BANNER PART--------------------  */}
                <BanerDiv background={({theme})=>theme.colors.lightblue}>
                    <div>
                        <div><h3>{texts.banner.header}</h3></div>
                        <div> {texts.banner.text}</div>
                        <div className='button'><StyledButton buttoncolor={({theme})=>theme.colors.red}  as={Link} to='/404'>{texts.banner.button}</StyledButton>  </div>
                    </div>
                    <div className='baner'><Img src={ImgBaner} width='28' alt='baner'></Img></div>
                </BanerDiv>
        
                    {/* ----------------SERVICES PART-------------------- */}
            <MainDiv>
                <DIV textalgin="center">
                    <div>
                    <H2>{texts.service.header}</H2>
                    <p>{texts.service.text}</p></div>
                </DIV>
                <DIV display='left' justifycontent='flex-start' className='services'>
                    <DIV justifycontent='flex-start'>
                        <div><Img src={icon1} width='4' alt='Nr1'></Img></div><div className='header'>{texts.service.headernr1}</div><div className='text' >{texts.service.textnr1}</div>
                    </DIV>
                    <DIV justifycontent='flex-start'>
                        <div><Img src={icon2} width='4' alt='Nr2'></Img></div><div className='header'>{texts.service.headernr2}</div><div className='text'>{texts.service.textnr2}</div>
                    </DIV>
                    <DIV justifycontent='flex-start'>
                        <div><Img src={icon3} width='4' alt='Nr3'></Img></div><div className='header'>{texts.service.headernr3}</div><div className='text'>{texts.service.textnr3}</div>
                    </DIV>
                    <DIV justifycontent='flex-start'>
                        <div><Img src={icon4} width='4' alt='Nr4'></Img></div><div className='header'>{texts.service.headernr4}</div><div className='text'>{texts.service.textnr4}</div>
                    </DIV>
                    <DIV justifycontent='flex-start'>
                        <div><Img src={icon5} width='4' alt='Nr5'></Img></div><div className='header'>{texts.service.headernr5}</div><div className='text'>{texts.service.textnr5}</div>
                    </DIV>
                </DIV>
            </MainDiv>

                {/* ----------------FOOTER PART-------------------- */}
            <MainDiv background={({theme})=>theme.colors.darkblue} padding='0em 4.4em 1.1em 4.4em'>
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
            <MainDiv background={({theme})=>theme.colors.darkblue} fontcolor='#ffffff' padding='0' textalgin='center'>
                <Hr></Hr>
                {texts.footer.bottomtext}
            </MainDiv>
            </>
        );
    }
}
    

  


