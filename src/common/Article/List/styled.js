import styled from "styled-components";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
  column-gap: 115px;
  color: ${({ theme }) => theme.color.textSecondary};
  font-weight: 400;
  font-size: 18px;
  list-style: none;
  li::before {
    content: "•"; 
    color: ${({ theme }) => theme.color.button};
    padding-right: 16px;
    font-size: 29px;
  };
  @media (max-width: ${({ theme }) => theme.breakPoint.maxContent}px) {
    grid-template-columns: 1fr 1fr;
  };
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    display: flex;
    flex-direction: column;
  };
`;

export const ListItem = styled.li`
  max-width: 290px;
  word-break: break-word;
`;