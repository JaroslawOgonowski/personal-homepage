import { Content, Herald, HireMeButton, Photo, Title, Wrapper } from "./styled";
import photo from "./images/JarosławOgonowski.jpg"
import { ThemeSwitchButton } from "./ThemeSwitchButton";

const PageHeader = () => (
<Wrapper>
<Photo src={photo} alt="Jarosław Ogonowski"/>
<Content>
<Herald>This is</Herald>
<Title>Jarosław Ogonowski</Title>
💼🆕 I am a starting front end developer. 
I am looking for a job where I can improve my skills and acquire completely new ones.
<HireMeButton>Hire me</HireMeButton>
</Content>
<ThemeSwitchButton/>
</Wrapper>
);

export default PageHeader;
