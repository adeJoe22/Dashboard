import React, {createContext, useState} from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/globalStyles";
import { Helmet } from "react-helmet";

import { RouterProvider } from "react-router-dom";
import router from "./router";


export const ThemeContext = createContext(null)

function App() {

  const [theme, setTheme] = useState('light')

  const themeStyle = theme === 'light'? lightTheme : darkTheme

  return (
  <ThemeContext.Provider value={{setTheme, theme}}>
     <ThemeProvider theme={themeStyle}>
            <GlobalStyle/>
            <Helmet>
              <title>Dashboard | SoftSolve</title>
              <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
            </Helmet>
            <>
              <RouterProvider router={router}/>
            </>
  </ThemeProvider>
  </ThemeContext.Provider>
  )
 
}

export default App;
