import styled from "styled-components";

export const StyledTile = styled.div`
width: 592px;
height: 322px;
background-color: ${({theme})=> theme.color.sectionBackground};
margin: 0 auto ;
text-align: left;
border: 6px solid ${({theme})=> theme.color.border};
box-shadow: 0px -2px 50px ${({theme})=> theme.color.shadow}, 0px 16px 58px ${({theme})=> theme.color.shadow};
border-radius: 4px;
&:hover{
    border: 6px solid ${({theme})=> theme.color.borderOnHover};
    box-shadow: 0px -2px 50px rgba${({theme})=> theme.color.shadow}, 0px 16px 58px rgba${({theme})=> theme.color.shadow};
    border-radius: 4px;
}
`;

export const Container = styled.div`
padding: 56px;
font-weight: 400;
font-size: 18px;
color: ${({theme})=> theme.color.textSecondary};
@media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
     padding: 24px;
     }
`;


export const Title = styled.h3`
margin: 0;
font-weight: 700;
font-size: 24px;
color: ${({theme})=> theme.color.button};
`;

export const Content = styled.p`
word-break: break-word;
font-weight: 400;
font-size: 18px;
line-height: 140%;
margin-top: 24px;
margin-bottom: 24px;
overflow-x: auto;
height: 75px;
`;

export const Demo = styled.p`
`;

export const Code = styled.p`
`;

export const GHLink = styled.a`
text-decoration: none;
color: ${({theme})=> theme.color.button};
border-bottom: 1px solid ${({theme})=> theme.color.borderOnHover};
&:hover{
    color: ${({theme})=> theme.color.buttonHover};
}
`;