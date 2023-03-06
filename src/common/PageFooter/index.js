import { Content, FooterTitle, IconLink, SocialLinks, StyledPageFooter, StyledParahraph, Wrapper } from "./styled"
import facebook from "./socialIcons/Facebook_black.svg"
import instagram from "./socialIcons/Instagram_black.svg"
import github from "./socialIcons/Github_black.svg"
import linkedin from "./socialIcons/LinkedIN_black.svg"

const PageFooter = () => {
    return (
        <Wrapper>
            <StyledPageFooter>
                <StyledParahraph>let's talk!</StyledParahraph>
                <FooterTitle>dza.ogonowski@gmail.com</FooterTitle>
                <Content>
                    Hi! I am open to cooperation proposals and any tips and new knowledge.
                    If you are looking for a person like me for your team - contact me... 👆
                </Content>
                <SocialLinks>
                    <IconLink src={github} alt=""></IconLink>
                    <IconLink src={linkedin} alt=""></IconLink>
                    <IconLink src={facebook} alt=""></IconLink>
                    <IconLink src={instagram} alt=""></IconLink>
                </SocialLinks>
            </StyledPageFooter>
        </Wrapper>
    )
};
export default PageFooter;