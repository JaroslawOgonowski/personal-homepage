import { ThemeButton, ToogleThemeIcon } from "./styled"
import icon from "./graphic/ToggleOff-light.svg"
export const ThemeSwitchButton = () => {
    return (
        <ThemeButton>DARK MODE OFF            
                <ToogleThemeIcon src={icon} alt=""/>           
        </ThemeButton>
    )
};