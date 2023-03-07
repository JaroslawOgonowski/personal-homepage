import { ThemeButton, IconContainer, ThemeIconBackground, ButtonText } from "./styled"
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
            <ButtonText>DARK MODE {darkModeOn ? "OFF" : "ON"}</ButtonText>
            <IconContainer>
            <ThemeIconBackground><Sun/></ThemeIconBackground>
            </IconContainer>
        </ThemeButton>
    )
};