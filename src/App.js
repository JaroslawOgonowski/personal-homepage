import { theme } from "./theme"
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./GlobalStyle"
import PersonalHomepage from "./features/PersonalHomepage";
import Article from "./common/Article";


function App() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <PersonalHomepage/>
      <Article></Article>
    </ThemeProvider>
  );
}

export default App;
