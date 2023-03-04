import styled from "styled-components";

export const ThemeButton = styled.button`
color: ${({theme})=> theme.color.textSecondary};
display: flex;
align-items: center;
align-self: flex-start;
border: none;
background-color: ${({theme})=> theme.color.whiteLilac};
transition: 1s;
position: absolute;
top: 120px;
right: 100px;
`;

export const ToogleThemeIcon = styled.img`
margin-left: 12.47px;
`;