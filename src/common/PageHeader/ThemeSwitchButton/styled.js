import styled, { css } from "styled-components";

export const ThemeButton = styled.button`
color: ${({ theme }) => theme.color.textSecondary};
display: flex;
align-items: center;
align-self: flex-start;
border: none;
background-color: ${({ theme }) => theme.color.whiteLilac};
position: absolute;
top: 120px;
right: 100px;

@media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
   top:21.46px;
   right:17.47px;
   color: ${({ theme }) => theme.color.whiteLilac};
   }
`;

export const IconContainer = styled.div`
margin-left: 12.47px;
width: 48px;
height: 26px;
background: #E5E5E5;
border: 1px solid ${({ theme }) => theme.color.textSecondary};
border-radius: 30px;
display: flex;
padding: 3px;

${({ darkModeOn }) => darkModeOn && css`
    background: rgba(54, 54, 54, 0.72);
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-color: white;
`}
`;

export const ThemeIconBackground = styled.div`
background-color: ${({ theme }) => theme.color.textSecondary};
width: 20px;
border-radius: 50%;
padding: 3px;
color:${({ theme }) => theme.color.white};
display: flex;
justify-content: center;
align-items: center;
transition: 1s;

${({ darkModeOn }) => darkModeOn && css`
background-color: white;
color: black;
transform: translateX(22px);
`}

`;
export const Sun = styled.img`
width: 20px;
`;