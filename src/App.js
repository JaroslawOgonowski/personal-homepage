import { theme } from "./theme"
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./GlobalStyle"
import PersonalHomepage from "./features/PersonalHomepage";
import Portfolio from "./features/Portfolio";
import PageFooter from "./common/PageFooter";


function App() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <PersonalHomepage/>
      <Portfolio/>
      <PageFooter/>
    </ThemeProvider>
  );
}

export default App;
