import { themeLight, themeDark } from "./theme"
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./GlobalStyle"
import PersonalHomepage from "./features/PersonalHomepage";
import Portfolio from "./features/Portfolio";
import PageFooter from "./common/PageFooter";
import { useSelector } from "react-redux";
import { selectMode } from "./common/PageHeader/ThemeSwitchButton/themeSwitchSlice";


function App() {
  const darkModeOff = useSelector(selectMode);            
     
  return (
    <ThemeProvider theme={darkModeOff? themeLight : themeDark}>
    <GlobalStyle />
      <PersonalHomepage/>
      <Portfolio/>
      <PageFooter/>
    </ThemeProvider>
  );
}

export default App;
