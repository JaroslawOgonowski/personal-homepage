import styled, { css } from "styled-components";

export const ThemeButton = styled.button`
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
@media (max-width: 1300px) {
   top:20px;
   right:20px;
   }
   
`;

export const ButtonText = styled.p`
color: ${({ theme }) => theme.color.textSecondary};
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
background-color: ${({ theme }) => theme.color.switchBackground} ;
border: 1px solid ${({ theme }) => theme.color.textSecondary};
border-radius: 30px;
display: flex;
padding: 3px;
`;

export const ThemeIconBackground = styled.div`
background-color: ${({ theme }) => theme.color.textSecondary};
width: 20px;
border-radius: 50%;
padding: 3px;
color:${({ theme }) => theme.color.contrast};
display: flex;
justify-content: center;
align-items: center;
transition: 1s;

${({ darkModeOff }) => darkModeOff && css`
transform: translateX(22px);
`}

`;
export const Sun = styled.img`
width: 20px;
`;