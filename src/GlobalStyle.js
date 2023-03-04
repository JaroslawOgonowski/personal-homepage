import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
html {
  font-family: 'Inter', sans-serif;
  color:${({theme})=> theme.color.textBlack};
  background-color: ${({theme})=> theme.color.whiteLilac};
}

*, ::after, ::before {
  box-sizing: inherit;
}
`