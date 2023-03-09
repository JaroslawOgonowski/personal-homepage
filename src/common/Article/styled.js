import styled from "styled-components";

export const Wrapper = styled.article`
max-width: 1216px;
background-color: ${({ theme }) => theme.color.sectionBackground};
margin: auto;
box-shadow: 0px -2px 50px ${({ theme }) => theme.color.shadow}, 0px 16px 58px ${({ theme }) => theme.color.shadow};
border-radius: 4px;
padding-bottom: 32px;
`;

export const Title = styled.h2`
padding-left: 32px;
padding-top: 32px;
padding-bottom: 15px;
font-size: 30px;
font-weight: 900;
border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;

export const Content = styled.div`
`;