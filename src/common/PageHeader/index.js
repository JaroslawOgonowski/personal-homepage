import { Content, Herald, HireMeIcon, Link, Paragraph, Photo, Title, Wrapper } from "./styled";
import photo from "./images/JarosławOgonowski.jpg"
import hireMeIcon from "./images/Message.svg"
import { ThemeSwitchButton } from "./ThemeSwitchButton";
import { ButtonBlueLink } from "../ButtonBlueLink/styled";

const PageHeader = () => (
    <Wrapper>        
        <Photo src={photo} alt="Jarosław Ogonowski" />
        <Content>
            <ThemeSwitchButton />
            <Herald>This is</Herald>
            <Title>Jarosław Ogonowski</Title>
            <Paragraph>
                💼🆕 I'm a starting front end developer.
                I'm looking for a job where I can improve my skills and acquire completely new ones.
            </Paragraph>
            <Link href="mailTo: dza.ogonowski@gmail.com">
                <ButtonBlueLink>
                    <HireMeIcon src={hireMeIcon} alt="" />
                    Hire Me
                </ButtonBlueLink>
            </Link>
        </Content>
        
    </Wrapper>
);

export default PageHeader;
