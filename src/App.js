import { theme } from "./theme"
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./GlobalStyle"
import PersonalHomepage from "./features/PersonalHomepage";
import Portfolio from "./features/Portfolio";


function App() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <PersonalHomepage/>
      <Portfolio/>
    </ThemeProvider>
  );
}

export default App;
