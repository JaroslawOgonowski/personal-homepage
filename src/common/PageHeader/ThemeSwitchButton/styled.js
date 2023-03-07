import styled, { css } from "styled-components";

export const ThemeButton = styled.button`
color: ${({ theme }) => theme.color.textSecondary};
display: flex;
align-items: center;
align-self: flex-start;
border: none;
transition: 1s;
background-color: ${({ theme }) => theme.color.mainBackground};
position: absolute;
top: 120px;
right: 100px;
cursor: pointer;
@media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
   top:21.46px;
   right:17.47px;
   }
`;

export const ButtonText = styled.p`
@media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px ) {
   display: none;
   }
@media (max-width: ${({ theme }) => theme.breakPoint.galaxyA51}px ) {
   display: none;   
   }
`;


export const IconContainer = styled.div`
margin-left: 12.47px;
width: 48px;
height: 26px;
background: #E5E5E5;
border: 1px solid ${({ theme }) => theme.color.border};
border-radius: 30px;
display: flex;
padding: 3px;

${({ darkModeOn }) => darkModeOn && css`
    background: #363636b8;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px ${({ theme }) => theme.color.shadow};;
    border-color: sectionBackground;
`}
`;

export const ThemeIconBackground = styled.div`
background-color: ${({ theme }) => theme.color.textSecondary};
width: 20px;
border-radius: 50%;
padding: 3px;
color:${({ theme }) => theme.color.sectionBackground};
display: flex;
justify-content: center;
align-items: center;
transition: 1s;

${({ darkModeOn }) => darkModeOn && css`
background-color: ${({ theme }) => theme.color.sectionBackground};
color: black;
transform: translateX(22px);
`}

`;
export const Sun = styled.img`
width: 20px;
`;