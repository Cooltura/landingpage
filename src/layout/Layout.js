import React from "react"
import {createGlobalStyle,ThemeProvider} from "styled-components";
import RalewayBoldfont from "../fonts/Raleway-Bold.ttf";
import LatoRegularfont from "../fonts/Lato-Regular.ttf";
import {theme} from "../utils/theme";

const GlobalStyle =createGlobalStyle`
  body{
    padding:0;
    margin:0;
    line-height:1.5;
    color:${({theme}) =>theme.colors.gray || 'gray'};
    font-family:${({theme}) =>theme.fonts.text || 'Arial'};  
    
  }
  @font-face{
    font-family:LatoRegularfont;
    src:url(${LatoRegularfont});
  }
  @font-face{
    font-family:RalewayBoldfont;
    src:url(${RalewayBoldfont});
  }
  f
`;

const Layout = ({children}) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle/>
      <div>
            {children}
      </div>
    </>
  </ThemeProvider>
);

export default Layout