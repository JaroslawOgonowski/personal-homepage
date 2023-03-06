import styled from "styled-components";

export const StyledPageFooter = styled.footer`
margin-top: 120px;
width: 691px;
`;

export const StyledParahraph = styled.p`
font-weight: 700;
font-size: 12px;
text-transform: uppercase;
color: ${({ theme }) => theme.color.textSecondary};
margin: 0;
`;

export const FooterTitle = styled.h2`
font-weight: 900;
font-size: 32px;
line-height: 39px;
margin-top: 24px;
margin-bottom: 24px;
`;

export const Content = styled.div`
margin: 0;
font-weight: 400;
font-size: 18px;
color: ${({ theme }) => theme.color.black};
`;

export const SocialLinks = styled.div`
display: flex;
flex-direction: row;
gap: 24px;
`;

export const IconLink = styled.img`
width: 48px;
height: 48px;
margin-top: 56px;
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: row;
align-content: flex-start;
justify-content: flex-start;
width: 1216px;
margin: auto;
margin-bottom: 109px;
`;


