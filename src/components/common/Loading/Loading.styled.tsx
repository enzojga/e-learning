import styled, { keyframes } from "styled-components";
import { FlexContainer } from "../../../styles/Generics/Generics";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AnimatedImage = styled.img`
  animation: ${rotate360} 2s infinite linear;
  max-width: 100vw;
  max-heigh: 100vw;
`;

export const LoadginContainer = styled(FlexContainer)`
  width: 100vw;
  height: 100vh;
`;