import React from "react"

import MainDiv from "../styledcomponents/MainDiv"
import DIV from "../styledcomponents/DIV"
import H2 from "../styledcomponents/H2"
import Img from "../styledcomponents/Img"

import imgadventage1 from '../images/adventage1.png'
import imgadventage2 from '../images/adventage2.png'
import arrow from '../images/arrow.png'

import styled from "styled-components"

import {texts} from "../utils/texts"

const Div=styled.div`
    width:8em;
    position:absolute;
    transition-duration:0.8s;

    &.translation{
        transition-duration:0.8s;
    }
    
    &#arrow1{
        left:0%;
      margin-top:2%;
    }
    &#MyDiv0{
        left:5%;  
        opacity:0;
    }
    &#MyDiv1{
        left:12%;    
    }
    &#MyDiv2{
        left:32%;
          }
    &#MyDiv3{
        left:52%;      
    }
    &#MyDiv4{
        left:72%;    
    }
    &#MyDiv5,&#MyDiv6,&#MyDiv7,&#MyDiv8,&#MyDiv9{
        opacity:0;
        left:80%;    
    }
    &#arrow2{
        left:85%;
        margin-top:2%;    
    }   
  
`;
export default class Adventage extends React.Component  {
    constructor(props) {
        super(props);

        this.carouselitemsright=this.carouselitemsright.bind(this);
        this.carouselitemsleft=this.carouselitemsleft.bind(this);
        this.arrowright = this.arrowright.bind(this);
        this.arrowleft = this.arrowleft.bind(this);
        
        this.state = {
            semafore:true,
            array:[],
            text_array:[texts.adventage.texts[0],texts.adventage.texts[1],texts.adventage.texts[2],texts.adventage.texts[3],texts.adventage.texts[4],texts.adventage.texts[5],texts.adventage.texts[6],texts.adventage.texts[7],texts.adventage.texts[8]],
            img_array:[imgadventage1,imgadventage2,imgadventage1,imgadventage2,imgadventage1,imgadventage1,imgadventage2,imgadventage1,imgadventage1],       
        }
    }

    componentDidMount(){
        let new_array=[document.getElementById('MyDiv0'),document.getElementById('MyDiv1'),document.getElementById('MyDiv2'),document.getElementById('MyDiv3'),document.getElementById('MyDiv4'),document.getElementById('MyDiv5'),document.getElementById('MyDiv6'),document.getElementById('MyDiv7'),document.getElementById('MyDiv8')];
        this.setState({
            array:new_array
        }) 


    }


    carouselitemsright() {  
        /* function moves items right one place*/  
        /* unlock button by semafor */ 
        let new_array=this.state.array;
        let last=new_array[new_array.length-1];  

        new_array.pop();
        new_array.unshift(last);

        this.setState({
            array:new_array,
            semafore:true
        }) 
    }
    carouselitemsleft() {  
        /* function moves items left one place*/  
        /* unlock button by semafor */ 
        let new_array=this.state.array;
        let first=new_array[0];  

        
        new_array.shift();
        new_array.push(first);

        this.setState({
            array:new_array,
            semafore:true
        }) 
    }
       
    arrowright(){ 
      
          /* semafor is true (unlock button) => animation start and set semafore:false     */
          /* semafor is false (lock button) =>animation doesn`t work  */

        if(this.state.semafore===true){

            this.setState({
            semafore:false
            }) 

            let elements=this.state.array;
            let first=0;
            let last=elements.length-1;
            let last_visible_element=4;
            if(elements[0]) 
            {    
                setTimeout(function c(){

                    /* visible animations */
                    for(let j=first ; j<last_visible_element ; j++){
                        elements[j].style.left=(j*20)+12+'%';
                    }
                         /*element incoming */
                         elements[first].style.opacity = 1; 
                        /*outgoing element */
                    elements[last_visible_element].style.left = '85%'; 
                    elements[last_visible_element].style.opacity = 0;

                                /*invisible animations */  
                    elements[last].classList.remove("translation");

                        setTimeout(function a(){   
                             /*element flies to start  */
                            elements[last].style.left = '5%';    
                                   
                            setTimeout(function a(){   
                                elements[last].classList.add("translation");
                            },400) 
                        },400);  
                },100);     
             }
            setTimeout(this.carouselitemsright,900);
        }   
    }

    arrowleft(){ 
            /* semafor is true (unlock button) => animation start and set semafore:false     */
            /* semafor is false (lock button) =>animation doesn`t work  */
     
          if(this.state.semafore===true){

            this.setState({
            semafore:false
            }) 

            let elements=this.state.array;
            let first=0;
            let second=1;
            let last_visible_element=5;

            if(elements[0]) 
            {    
                setTimeout(function c(){
                    /* visible animations */
                    for(let j=2 ; j<6 ; j++){
                        elements[j].style.left=(j*20)-28 +'%';
                    }
                    /*element incoming */
                    elements[last_visible_element].style.opacity = 1;
                     /*outgoing element */
                    elements[second].style.left = '5%'; 
                    elements[second].style.opacity = 0; 

                     /* invisible animations */
                    elements[first].classList.remove("translation");

                        setTimeout(function a(){   
                            
                             /*element flies to the end  */
                            elements[first].style.left = '85%';   
                                   
                            setTimeout(function a(){   
                                elements[first].classList.add("translation");
                            },400) 
                        },400);  
                },100);     
             }
            setTimeout(this.carouselitemsleft,900);
        } 
    }  
    

    render(){
        return (
    <>  
        <MainDiv background='lightblue' textalgin="center" padding='1.1em 4.4em 1.1em 4.4em' height='13em' className='withshadow'> 
            <H2>{texts.adventage.header}</H2>  
            <DIV alignitems='center'>  
              <div>
                    
                    <Div id='MyDiv0' >
                        <div><Img src={this.state.img_array[0]} width='5'  alt="image1"></Img></div>
                        <DIV fontcolor={({theme})=>theme.colors.black} fontfamily={({theme})=>theme.fonts.header} textalign='center' >{this.state.text_array[0]}</DIV>
                    </Div>
                    <Div id='MyDiv1'>
                        <div><Img src={this.state.img_array[1]} width='5'  alt="image1"></Img></div>
                        <DIV fontcolor={({theme})=>theme.colors.black} fontfamily={({theme})=>theme.fonts.header} textalign='center' >{this.state.text_array[1]}</DIV>
                    </Div>
                    <Div id='MyDiv2'>
                        <div><Img src={this.state.img_array[2]} width='5' alt="image2"></Img></div> 
                        <DIV fontcolor={({theme})=>theme.colors.black} fontfamily={({theme})=>theme.fonts.header} textalign='center'>{this.state.text_array[2]}</DIV>
                    </Div>
                    <Div id='MyDiv3'>
                        <div><Img src={this.state.img_array[3]} width='5' alt="image3"></Img></div>  
                        <DIV fontcolor={({theme})=>theme.colors.black} fontfamily={({theme})=>theme.fonts.header} textalign='center' >{this.state.text_array[3]}</DIV>
                    </Div>
                    <Div id='MyDiv4'>
                        <div><Img src={this.state.img_array[4]} width='5' alt="image4"></Img></div> 
                        <DIV fontcolor={({theme})=>theme.colors.black} fontfamily={({theme})=>theme.fonts.header} textalign='center' >{this.state.text_array[4]}</DIV>
                    </Div>
                    <Div id='MyDiv5'>
                        <div><Img src={this.state.img_array[5]} width='5' alt="image4"></Img></div> 
                        <DIV fontcolor={({theme})=>theme.colors.black} fontfamily={({theme})=>theme.fonts.header} textalign='center'>{this.state.text_array[5]}</DIV>
                    </Div>
                    <Div id='MyDiv6'>
                        <div><Img src={this.state.img_array[6]} width='5' alt="image4"></Img></div> 
                        <DIV fontcolor={({theme})=>theme.colors.black} fontfamily={({theme})=>theme.fonts.header} textalign='center'>{this.state.text_array[6]}</DIV>
                    </Div>
                    <Div id='MyDiv7'>
                        <div><Img src={this.state.img_array[7]} width='5' alt="image4"></Img></div> 
                        <DIV fontcolor={({theme})=>theme.colors.black} fontfamily={({theme})=>theme.fonts.header} textalign='center'>{this.state.text_array[7]}</DIV>
                    </Div>
                    <Div id='MyDiv8'>
                        <div><Img src={this.state.img_array[8]} width='5' alt="image4"></Img></div> 
                        <DIV fontcolor={({theme})=>theme.colors.black} fontfamily={({theme})=>theme.fonts.header} textalign='center'>{this.state.text_array[8]}</DIV>
                    </Div>
                    <Div id='arrow1'><Img className='arrow' src={arrow} width='3' alt="imagearrow1" onClick={this.arrowleft}></Img></Div>
                    <Div id='arrow2'><Img className='rotate arrow' src={arrow} width='3'  alt="imagearrow2" onClick={this.arrowright}></Img></Div>         
                </div>
            </DIV>

        </MainDiv>
</>
)
}
}
