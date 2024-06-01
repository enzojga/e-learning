import styled from "styled-components";
import { FlexContainerProps } from "./Generics.interface";

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1023px) {
    display: ${props => props.disapearOnTablet ? 'none' : 'inherit'};
  }
`;
