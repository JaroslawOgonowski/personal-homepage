import styled from "styled-components";
import { theme } from "../../theme";

export const Wrapper = styled.article`
max-width: 1216px;
background-color: ${({theme})=> theme.color.sectionBackground};
margin: auto;
box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
border-radius: 4px;
`;

export const Title = styled.h2`
padding-left: 32px;
padding-top: 32px;
padding-bottom: 15px;
font-size: 30px;
font-weight: 900;
border-bottom: 1px solid ${({theme})=> theme.color.border};
`; 

export const Content = styled.div`
`;