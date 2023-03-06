import styled from "styled-components";

export const Wrapper = styled.div`
max-width: 1216px;
margin: auto;
margin-top: 120px;
display: grid;
grid-template-columns: auto 1fr auto;
grid-gap: 66px;
align-items: center;
`;

export const Photo = styled.img`
width: 398px;
height: 398px;
border-radius: 50%;
`;

export const Herald = styled.div`
color: ${({ theme }) => theme.color.textSecondary};
font-size: 12px;
font-weight: 700;
margin-bottom: 12px;
`;

export const Title = styled.h1`
font-size: 38px;
font-weight: 900;
margin-top: 0;
margin-bottom: 35px;
`;

export const Content = styled.div`
font-size: 20px;
font-weight: 400;
line-height: 28px;
display: grid;
`;

export const HireMeButton = styled.button`
padding: 12px 16px;
text-align: center;
background-color: ${({ theme }) => theme.color.scienceBlue};
color: ${({ theme }) => theme.color.white};;
font-size: 20.06px;
font-weight: 600;
border-radius: 4px;
border: 1px solid;
border-color:${({ theme }) => theme.color.iron};
max-width: max-content;
margin-top: 32px;
transition: 0.5s;
&:hover{
    border: 1px solid ${({ theme }) => theme.color.iron};
    border-radius: 4px;;
    cursor: pointer;
    box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;  
    }
&::selection{
    border: 1px solid rgba(209, 213, 218, 0.3);
    box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
    border-radius: 4px;
  }
`;

export const HireMeIcon = styled.img`
max-width: 19.23px;
max-height: 17.12px;
color: ${({ theme }) => theme.color.white};
margin-right: 18.77px;
`;

