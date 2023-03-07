import styled from "styled-components";

export const StyledPageFooter = styled.footer`
margin-top: 120px;
max-width: 691px;
@media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) 
{
    margin-left: 16px;
    margin-right: 16px;
}
`;

export const StyledParahraph = styled.p`
font-weight: 700;
font-size: 12px;
text-transform: uppercase;
color: ${({ theme }) => theme.color.textSecondary};
margin-bottom: 24px;
`;

export const MailLink = styled.a`
font-weight: 900;
font-size: 32px;
line-height: 39px;
text-decoration: none;
color: ${({ theme }) => theme.color.mainText};
&:hover{
    color: ${({ theme }) => theme.color.button}
}
`;

export const Content = styled.div`
margin-top: 24px;
font-weight: 400;
font-size: 18px;
color: ${({ theme }) => theme.color.mainText};
`;

export const SocialLinks = styled.div`
display: flex;
flex-direction: row;
gap: 24px;
margin-top: 56px;
`;


export const SocialLink = styled.a`
color: black;
width: 48px;
height: 48px;
&:hover{
    color: ${({ theme }) => theme.color.button};  
}
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: row;
align-content: flex-start;
justify-content: flex-start;
max-width: 1216px;
margin: auto;
margin-bottom: 109px;
`;


