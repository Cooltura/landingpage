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
   
    position:absolute;
    transition-duration:1s;
    &.translation{
        transition-duration:1s;
    }
    &#arrow1{
        left:5%;
      margin-top:2%;
    }
    &#MyDiv0{
        left:5%;  
        opacity:0;
    }
    &#MyDiv1{
        left:10%;    
    }
    &#MyDiv2{
        left:30%;
          }
    &#MyDiv3{
        left:50%;      
    }
    &#MyDiv4{
        left:70%;    
    }
    &#arrow2{
        left:90%;
        margin-top:2%;    
    }   
    &#MyDiv0.animated{
        left:10%;  
        opacity:1;
    }
    &#MyDiv1.animated{
        left:30%;       
    }
    &#MyDiv2.animated{
        left:50%;     
    }
    &#MyDiv3.animated{
        left:70%;   
    }
    &#MyDiv4.animated{
        left:80%;
        opacity:0;   
    }
`;
export default class Adventage extends React.Component  {
    constructor(props) {
        super(props);

        this.f2=this.f2.bind(this);
        this.carouselright = this.carouselright.bind(this);
        this.carouselleft = this.carouselleft.bind(this);
        
        this.state = {
            aktual_state:false,
            array:[],
            text_array:[texts.adventage.texts[0],texts.adventage.texts[0],texts.adventage.texts[0],texts.adventage.texts[1],texts.adventage.texts[0]],
            img_array:[imgadventage1,imgadventage2,imgadventage1,imgadventage2,imgadventage1],       
        }
    }
    f() {   
        let last_img=this.state.img_array[this.state.img_array.length-1];
        let last_text=this.state.text_array[this.state.text_array.length-1];
        let array_i=this.state.img_array;
        let array_t=this.state.text_array;
        array_i.pop();
        array_i.unshift(last_img);
        array_t.pop();
        array_t.unshift(last_text);
        this.setState({
            img_array:array_i,
            text_array:array_t
        }) 
    }
    f2() {    
        let new_array=this.state.array;
        let last=new_array[new_array.length-1];  
        new_array.pop();
        new_array.unshift(last);
        this.setState({
            array:new_array
        }) 
    }
       
    carouselright(){ 
        
        var new_array;

        if(this.state.aktual_state===false){
        new_array=[document.getElementById("MyDiv0"),document.getElementById("MyDiv1"),document.getElementById("MyDiv2"),document.getElementById("MyDiv3"),document.getElementById("MyDiv4")];
        }
        let first=0;
        let last=4;
        
        this.setState({
            array:new_array,
            aktual_state:true    
        }) 


      
        let elements=this.state.array;
         
        for(let j=0 ; j<=4 ; j++){
            elements[j].style.left=(j*20)+10+'%';
        }
        elements[first].style.opacity = 1;
        elements[last].style.opacity = 0;
        
        setTimeout(function b(){
            elements[last].classList.remove("translation");
            setTimeout(function a(){   
              elements[last].style.left = '-10%';
                 
             setTimeout(function a(){   
                elements[last].classList.add("translation");
                },500)
            },500);
        },500);

        setTimeout(this.f2,1600);


       



        /*  
        let element0 = document.getElementById("MyDiv0");
        let element1 = document.getElementById("MyDiv1");
        let element2 = document.getElementById("MyDiv2");
        let element3 = document.getElementById("MyDiv3");
        let element4 = document.getElementById("MyDiv4");
        element0.classList.add("translation");
        element1.classList.add("translation");
        element2.classList.add("translation");
        element3.classList.add("translation");
        element4.classList.add("translation");

        

        setTimeout(function a(){
            element0.classList.add("animated");
            element1.classList.add("animated");
            element2.classList.add("animated");
            element3.classList.add("animated");
            element4.classList.add("animated");
            setTimeout(function b(){
                element0.classList.remove("translation");
                element1.classList.remove("translation");
                element2.classList.remove("translation");
                element3.classList.remove("translation");
                element4.classList.remove("translation");
                setTimeout(function c() {   
                    
                    element0.classList.remove("animated");
                    element1.classList.remove("animated");
                    element2.classList.remove("animated");
                    element3.classList.remove("animated");
                    element4.classList.remove("animated");         
                }, 10);
         },1000);
        },100);
        setTimeout(this.f,1114);
        */
    }

    carouselleft(){ 
        let first_img=this.state.img_array[0];
        let first_text=this.state.text_array[0];

        let array_i=this.state.img_array;
        let array_t=this.state.text_array;

        array_i.shift();
        array_i.push(first_img);
        array_t.shift();
        array_t.push(first_text);
        
        this.setState({
            img_array:array_i,
            text_array:array_t
        })  
    }

    render(){
        return (
    <>  
        <MainDiv background={({theme})=>theme.colors.lightblue} textalgin="center" padding='1.1em 4.4em 1.1em 4.4em' className='withshadow'> 
            <H2>{texts.adventage.header}</H2>  
            <DIV alignitems='center'>    <div>
                    <Div id='arrow1'><Img className='arrow' src={arrow} width='3' alt="imagearrow1" onClick={this.carouselleft}></Img></Div>
                    <Div id='MyDiv0' className='start'>
                        <div><Img src={this.state.img_array[0]} width='5'  alt="image1"></Img></div>
                        <DIV fontcolor={({theme})=>theme.colors.black} fontfamily={({theme})=>theme.fonts.header} textalign='center' padding='0em 1em 0em 1em'>{this.state.text_array[0]}</DIV>
                    </Div>
                    <Div id='MyDiv1' className='start'>
                        <div><Img src={this.state.img_array[1]} width='5'  alt="image1"></Img></div>
                        <DIV fontcolor={({theme})=>theme.colors.black} fontfamily={({theme})=>theme.fonts.header} textalign='center' padding='0em 1em 0em 1em'>{this.state.text_array[1]}</DIV>
                    </Div>
                    <Div id='MyDiv2' className='start'>
                        <div><Img src={this.state.img_array[2]} width='5' alt="image2"></Img></div> 
                        <DIV fontcolor={({theme})=>theme.colors.black} fontfamily={({theme})=>theme.fonts.header} textalign='center' padding='0em 1em 0em 1em'>{this.state.text_array[2]}</DIV>
                    </Div>
                    <Div id='MyDiv3' className='start'>
                        <div><Img src={this.state.img_array[3]} width='5' alt="image3"></Img></div>  
                        <DIV fontcolor={({theme})=>theme.colors.black} fontfamily={({theme})=>theme.fonts.header} textalign='center' padding='0em 1em 0em 1em'>{this.state.text_array[3]}</DIV>
                    </Div>
                    <Div id='MyDiv4' className='start'>
                        <div><Img src={this.state.img_array[4]} width='5' alt="image4"></Img></div> 
                        <DIV fontcolor={({theme})=>theme.colors.black} fontfamily={({theme})=>theme.fonts.header} textalign='center' padding='0em 1em 0em 1em'>{this.state.text_array[4]}</DIV>
                    </Div>
                    
                    <Div id='arrow2'><Img className='rotate arrow' src={arrow} width='3'  alt="imagearrow2" onClick={this.carouselright}></Img></Div>         
                     </div>
            </DIV>

        </MainDiv>
</>
)
}
}

 /*     
        let element0 = document.getElementById("MyDiv0");
        let element1 = document.getElementById("MyDiv1");
        let element2 = document.getElementById("MyDiv2");
        let element3 = document.getElementById("MyDiv3");
        let element4 = document.getElementById("MyDiv4");
        element0.classList.add("translation");
        element1.classList.add("translation");
        element2.classList.add("translation");
        element3.classList.add("translation");
        element4.classList.add("translation");

        

        setTimeout(function a(){
            element0.classList.add("animated");
            element1.classList.add("animated");
            element2.classList.add("animated");
            element3.classList.add("animated");
            element4.classList.add("animated");
            setTimeout(function b(){
                element0.classList.remove("translation");
                element1.classList.remove("translation");
                element2.classList.remove("translation");
                element3.classList.remove("translation");
                element4.classList.remove("translation");
                setTimeout(function c() {   
                    
                    element0.classList.remove("animated");
                    element1.classList.remove("animated");
                    element2.classList.remove("animated");
                    element3.classList.remove("animated");
                    element4.classList.remove("animated");         
                }, 10);
         },1000);
        },100);
        setTimeout(this.f,1114);
        */