import styled, { keyframes } from "styled-components";
import { ReactComponent as Icon } from "./icon-spinner.svg";

const rotate = keyframes`
  0% {
      transform: rotate(0deg);
    }
  100% {
      transform: rotate(360deg);
    }
`;

export const Container = styled.div`

`;

export const LoadingText = styled.p`

`;

export const IconSpinner = styled(Icon)`
 margin-top: 40px; 
  max-width: 140px;
  animation: ${rotate} 1.5s linear infinite;
  @media(max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
    max-width: 80px;
  };
  `;
