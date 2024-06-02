import styled from "styled-components";
import { FlexContainerProps } from "./Generics.interface";

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.gap ? props.gap : 'none'};
  @media (max-width: 1023px) {
    display: ${props => props.disapearontablet ? 'none' : 'flex'};
    flex-direction: ${props => props.turncolumnontablet ? 'column' : 'row'};
  }
`;

export const FlexContainerColumn = styled(FlexContainer)<FlexContainerProps>`
  flex-direction: column;
`;

export const GradientImage = styled.img`
  background: linear-gradient(180.00deg, rgba(15, 19, 16, 0) 29.688%,rgb(16, 20, 17) 100%);
`