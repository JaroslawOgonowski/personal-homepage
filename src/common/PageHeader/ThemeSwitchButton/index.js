import { ThemeButton, IconContainer, ThemeIconBackground, ButtonText } from "./styled"
import { ReactComponent as Sun } from "./images/Sun.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectMode, toggleMode } from "../../../features/PersonalHomepage/themeSwitchSlice";

export const ThemeSwitchButton = () => {
    const darkModeOff = useSelector(selectMode)
    const dispatch = useDispatch();

    return (

        <ThemeButton 
            onClick={() => dispatch(toggleMode())}
        >
            <ButtonText>DARK MODE {darkModeOff ? "ON" : "OFF"}</ButtonText>
            <IconContainer>
            <ThemeIconBackground darkModeOff={!darkModeOff}><Sun/></ThemeIconBackground>
            </IconContainer>
        </ThemeButton>
    )
};