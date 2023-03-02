import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
html {
  font-family: 'Inter', sans-serif;
  color:${({theme})=> theme.color.black};
  background-color: ${({theme})=> theme.color.mercury};
}

*, ::after, ::before {
  box-sizing: inherit;
}
`