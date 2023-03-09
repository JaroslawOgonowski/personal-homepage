import styled from "styled-components";

export const List = styled.ul`
margin: auto;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-content: space-between;
justify-content: space-between;
max-width: 1216px;
gap: 8px;
list-style: none;
padding: 0;
`;

export const StyledTile = styled.li`
max-width: 592px;
background-color: ${({ theme }) => theme.color.sectionBackground};
margin: 0 auto ;
text-align: left;
border: 6px solid ${({ theme }) => theme.color.border};
box-shadow: 0px -2px 50px ${({ theme }) => theme.color.shadow}, 0px 16px 58px ${({ theme }) => theme.color.shadow};
border-radius: 4px;
&:hover{
    border: 6px solid ${({ theme }) => theme.color.borderOnHover};
    box-shadow: 0px -2px 50px rgba${({ theme }) => theme.color.shadow}, 0px 16px 58px rgba${({ theme }) => theme.color.shadow};
    border-radius: 4px;
}
`;

export const Container = styled.div`
padding: 56px;
font-weight: 400;
font-size: 18px;
color: ${({ theme }) => theme.color.textSecondary};
@media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    padding: 24px;
    };
`;

export const Title = styled.h3`
margin: 0;
font-weight: 700;
font-size: 24px;
color: ${({ theme }) => theme.color.button};
`;

export const Description = styled.p`
word-break: break-word;
font-weight: 400;
font-size: 18px;
margin-top: 24px;
margin-bottom: 24px;
overflow-x: auto;
`;

export const LinkLabel = styled.div`
margin-bottom: 8px;
word-break: break-all;
font-weight: 400;
font-size: 18px;
line-height: 140%;
`;

export const Link = styled.a`
text-decoration: none;
color: ${({ theme }) => theme.color.button};
border-bottom: 1px solid ${({ theme }) => theme.color.borderOnHover};
&:hover{
    color: ${({ theme }) => theme.color.buttonHover};
};
`;