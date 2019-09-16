import React from "react"
import {Link} from "gatsby"

import Slider from './Slider'
import Adventage from "./Adventage"


import StyledButton from "../styledcomponents/Button"
import MainDiv from "../styledcomponents/MainDiv"
import BanerDiv from "../styledcomponents/BanerDiv"
import DIV from "../styledcomponents/DIV"
import H2 from "../styledcomponents/H2"
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

import Usage2_1 from '../images/imgUsage2.jpg'
import Usage2_2 from '../images/imgUsage2.2.jpg'

import imgUsage from '../images/imgUsage.png'
import more from '../images/icon-more.png'


export default class LandingPage extends React.Component  {
    render(){
        return (
            <>              
                {/* ----------------HEADER PART-------------------- */}
            <MainDiv padding='0em 2em 1em 4em'>
                <DIV justifycontent='space-between' textalgin='left'>
                    <div>
                        <div><h1>{texts.header.header}</h1></div>
                        <div><h3>{texts.header.text}</h3></div>    
                        <div className="button">
                        <center> 
                            <StyledButton buttoncolor='red' as={Link} to='/404'>{texts.header.button}</StyledButton>
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
            <MainDiv background='verylightblue' textalgin="center">
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
                <center> <StyledButton buttoncolor='blue' as={Link} to='/404'>{texts.action.button}</StyledButton>  </center>          
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
                    <div><StyledButton buttoncolor='blue' as={Link} to='/404' ><Img className='usagebutton' src={more} width='2' alt='more'></Img>{texts.usage.button1}</StyledButton></div>
                    <div>
                        <StyledButton buttoncolor='blue' as={Link} to='/Usage/' state={{img1:Usage2_1,img2:Usage2_2, header:texts.usage.headers[2],text1:texts.usage.text2,text2:texts.usage.text2}}>
                            <Img className='usagebutton' src={more} width='2' alt='more'></Img>{texts.usage.button1}
                        </StyledButton>
                    </div>
                    <div><StyledButton buttoncolor='blue'  as={Link} to='/404'><Img className='usagebutton' src={more} width='2' alt='more'></Img>{texts.usage.button1}</StyledButton></div>
                       
                </DIV>

                <DIV>
                    <StyledButton buttoncolor='red'  as={Link} to='/MoreUsages' text='cos'>{texts.usage.button2}</StyledButton>       
                </DIV>
            </MainDiv>

                    {/* ----------------BANNER PART--------------------  */}
                <BanerDiv background='lightblue'>
                    <div>
                        <div><h3>{texts.banner.header}</h3></div>
                        <div> {texts.banner.text}</div>
                        <div className='button'><StyledButton buttoncolor='red'  as={Link} to='/404'>{texts.banner.button}</StyledButton>  </div>
                    </div>
                    <div className='baner'><Img src={ImgBaner} width='28' alt='baner'></Img></div>
                </BanerDiv>
        
                    {/* ----------------SERVICES PART-------------------- */}
            <MainDiv padding='0em 4.4em 1.1em 4.4em'>
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

           
            </>
        );
    }
}
    

  


