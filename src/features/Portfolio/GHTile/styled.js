import styled from "styled-components";

export const StyledTile = styled.div`
width: 592px;
height: 322px;
background-color: ${({theme})=> theme.color.white};
margin: 0 auto ;
text-align: left;
border: 6px solid rgba(209, 213, 218, 0.3);
box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
border-radius: 4px;

`;

export const Container = styled.div`
padding: 56px;
font-weight: 400;
font-size: 18px;
color: ${({theme})=> theme.color.textSecondary};
`;


export const Title = styled.h3`
font-weight: 700;
font-size: 24px;
color: ${({theme})=> theme.color.scienceBlue};
`;

export const Content = styled.p`
word-break: break-word;

`;

export const Demo = styled.p`

`;

export const Code = styled.p`

`;
export const GHLink = styled.a`
text-decoration: none;
color: ${({theme})=> theme.color.scienceBlue};
border-bottom: 1px solid hsla(212, 97%, 43%, 0.200)
`;