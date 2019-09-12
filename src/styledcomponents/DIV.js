import styled from "styled-components"

const DIV=styled.div`
   
    display:${({display})=>display || "flex"};
    justify-content:${({justifycontent})=>justifycontent || "center"};
    padding:${({padding})=>padding || 0};
    align-items:${({alignitems})=>alignitems || "center"};
    text-align:${({textalgin}) => textalgin || 'center'};
    color:${props=>props.fontcolor || props.theme.colors.gray};
    font-family:${props=>props.fontfamily || props.theme.fonts.text};
    
    a:link{
        text-decoration: none;
        color:currentcolor;
    }
    a.link:hover{
        border-bottom:1px solid currentcolor;
    }

    h3{
        font-size:1.4em;
        color:${({theme})=>theme.colors.gray ||'gray'};
        font-family:${({theme})=> theme.fonts.text || 'Arial'}; 
    }
    h1{
        font-size:1.95em;
        color:${({theme})=>theme.colors.black||'black'};
        font-family:${({theme})=> theme.fonts.header || 'Arial'};  
    }

    
    div.action{
        margin-left:0.5em;   
     } 
     div.header{
        color:${props => props.theme.colors.black || 'black'};
        font-family:${props => props.theme.fonts.header || 'Arial'};
    }  
    div.service{
        display:flex;
        align-items:center;
        div{
            display:inline-block;
        }
    } 
    div.footer{
        margin-right:2em; 
        div.imgfooter{
            display:flex;
            justify-content:space-around;    
            margin-bottom:1em;
        }
    }
    div.reference{
        display:flex;
        align-items:center;       
        div.textcompany{
            padding:0em 1.4em 0em 1.4em;  
            background:${({theme})=>theme.colors.verylightblue|| '#ffffff'};  
            color:${({theme})=>theme.colors.black|| 'black'}; 
        }    
        &.odd{
            margin-left:1em;
            div.triangle {  
                border-top:1em solid transparent;   
                border-bottom:1em solid  transparent ;
                border-right:1em solid ${({theme})=>theme.colors.verylightblue|| '#ffffff'};
                border-left:0.5em solid transparent ;                  
            }     
        }
        &.even{
            margin-right:1em;
            div.triangle {  
                border-top:1em solid transparent;   
                border-bottom:1em solid transparent;
                border-right:0.5em solid transparent;
                border-left:1em solid ${({theme})=>theme.colors.verylightblue|| '#ffffff'};                         
            }
        }  
    }
    
    img.usagebutton{
        position:relative;
           top:0.5em;
           right:0.2em;
    }

    &.menu{
      div.child{
        padding-left:1em;   
      }  
      div.childimg{
        padding-left:0.5em;   
      } 
    }

    
`;

export default DIV;