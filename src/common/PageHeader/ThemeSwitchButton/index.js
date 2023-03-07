import { ThemeButton, ToogleThemeIcon } from "./styled"
import icon from "./graphic/ToggleOff-light.svg"
import { useDispatch, useSelector } from "react-redux";
import { selectMode, toggleMode } from "./themeSwitchSlice";


export const ThemeSwitchButton = () => {
const darkModeOn =useSelector(selectMode)    
const dispatch = useDispatch();   

return (
        <ThemeButton
        onClick={() => dispatch(toggleMode())}
        >
            DARK MODE {darkModeOn ? "OFF" : "ON"}           
                <ToogleThemeIcon src={icon} alt=""/>           
        </ThemeButton>
    )
};