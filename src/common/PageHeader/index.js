import { Content, Herald, HireMeButton, HireMeIcon, Photo, Title, Wrapper } from "./styled";
import photo from "./images/JarosławOgonowski.jpg"
import hireMeIcon from "./images/Message.svg"
import { ThemeSwitchButton } from "./ThemeSwitchButton";

const PageHeader = () => (
    <Wrapper>
        <Photo src={photo} alt="Jarosław Ogonowski" />
        <Content>
            <Herald>This is</Herald>
            <Title>Jarosław Ogonowski</Title>
            💼🆕 I'm a starting front end developer.
            I'm looking for a job where I can improve my skills and acquire completely new ones.
            <a href="mailTo: dza.ogonowski@gmail.com">
                <HireMeButton>
                    <HireMeIcon src={hireMeIcon} alt="" />
                    Hire Me
                </HireMeButton>
            </a>
        </Content>
        <ThemeSwitchButton />
    </Wrapper>
);

export default PageHeader;
