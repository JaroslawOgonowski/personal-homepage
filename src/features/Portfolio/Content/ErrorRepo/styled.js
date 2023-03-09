import styled from "styled-components";

export const ErrorTitle = styled.h3`
font-weight: 700;
font-size: 24px;
line-height: 29px;
color: ${({ theme }) => theme.color.mainText};
margin-bottom: 32px;
`;

export const ErrorText = styled.div`
font-weight: 400;
font-size: 20px;
color: ${({ theme }) => theme.color.mainText};
margin-bottom: 32px;
`;

