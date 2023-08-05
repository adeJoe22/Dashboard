import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  margin: 0;
  box-sizing: border-box;
}

body{
  background:${({theme})=> theme.bg };
  color:${({theme})=> theme.text };
  letter-spacing: 0.6px;
  font-family: 'Open Sans', sans-serif;
}
`