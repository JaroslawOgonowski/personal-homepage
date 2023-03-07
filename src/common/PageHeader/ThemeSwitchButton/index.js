import { ThemeButton, IconContainer, ThemeIconBackground } from "./styled"
import { ReactComponent as Sun } from "./graphic/Sun.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectMode, toggleMode } from "./themeSwitchSlice";

export const ThemeSwitchButton = () => {
    const darkModeOn = useSelector(selectMode)
    const dispatch = useDispatch();

    return (

        <ThemeButton 
            onClick={() => dispatch(toggleMode())}
        >
            DARK MODE {darkModeOn ? "OFF" : "ON"}
            <IconContainer darkModeOn={darkModeOn}>
            <ThemeIconBackground darkModeOn={darkModeOn}><Sun/></ThemeIconBackground>
            </IconContainer>
        </ThemeButton>
    )
};