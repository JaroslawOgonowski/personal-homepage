import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
html {
  font-family: 'Inter', sans-serif;
  color:${({ theme }) => theme.color.mainText};
  background-color: ${({ theme }) => theme.color.mainBackground};
  transition: 1s;
}

*, ::after, ::before {
  box-sizing: inherit;
}
`