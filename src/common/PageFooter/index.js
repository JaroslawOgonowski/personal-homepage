import { Content, FooterTitle, MailLink, SocialLink, SocialLinks, StyledPageFooter, StyledParahraph, Wrapper } from "./styled";
import { ReactComponent as Facebook } from "./socialIcons/Facebook_black.svg";
import { ReactComponent as Instagram } from "./socialIcons/Instagram_black.svg";
import { ReactComponent as Github } from "./socialIcons/Github_black.svg";
import { ReactComponent as Linkedin } from "./socialIcons/LinkedIN_black.svg";

const PageFooter = () => {
    return (
        <Wrapper>
            <StyledPageFooter>
                <StyledParahraph>let's talk!</StyledParahraph>
                <MailLink href="mailTo:dza.ogonowski@gmail.com">dza.ogonowski@gmail.com</MailLink>
                <Content>
                    Hi! I am open to cooperation proposals and any tips and new knowledge.
                    If you are looking for a person like me for your team - contact me... 👇
                </Content>
                <SocialLinks>
                    <SocialLink href="https://github.com/JaroslawOgonowski"><Github/></SocialLink>
                    <SocialLink href="https://www.linkedin.com/in/jaros%C5%82aw-ogonowski-a54ab324a/"><Linkedin/></SocialLink>
                    <SocialLink href="https://www.facebook.com/jarek.ogonowski.9/"><Facebook/></SocialLink>
                    <SocialLink href="https://www.instagram.com/jaroslawogonowski/"><Instagram/></SocialLink>
                </SocialLinks>
            </StyledPageFooter>
        </Wrapper>
    )
};
export default PageFooter;