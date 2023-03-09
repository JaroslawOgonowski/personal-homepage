import styled from "styled-components";

export const Wrapper = styled.div`
max-width: 1216px;
margin: auto;
margin-top: 120px;
display: flex;
gap: 66px;
@media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
      display: flex;
      flex-direction: column;
      margin-top: 0;        
    }
`;

export const Photo = styled.img`
max-width: 398px;
max-height: 398px;
border-radius: 50%;
@media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    align-self: flex-start;
    margin-left: 16px;
    max-width: 60%;
    };
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

export const Paragraph = styled.p`
margin-bottom: 32px;
`;

export const Content = styled.div`
font-size: 20px;
font-weight: 400;
line-height: 28px;
display: grid;
@media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    margin-left: 16px;
    margin-right: 16px;
}
`;

export const HireMeIcon = styled.img`
max-width: 19.23px;
max-height: 17.12px;
color: ${({ theme }) => theme.color.buttonFont};
margin-right: 18.77px;
`;

export const Link = styled.a`
max-width: fit-content;
max-height: fit-content;
`;

