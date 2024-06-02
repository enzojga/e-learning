import styled from "styled-components";
import { FlexContainerProps } from "./Generics.interface";

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
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
  @media (max-width: 1023px) {
    height: 100%;
    width: 100vw;
  }
`;

export const WhiteParagraph = styled.p`
  color: rgb(251, 242, 242);
  font-family: 'Poppins', sans-serif;
  font-size: 60px;
  font-weight: 500;
  line-height: 72px;
  text-align: left;
  text-transform: capitalize;
  @media (max-width: 1023px) {
    text-align: center;
  }
`;

export const GrayParagraph = styled.p`
  color: rgb(164, 142, 142);
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
`;

export const FloatingBox = styled.div`
  position: relative;
  top: 305px;
  left: 195px;
  width: 325.52px;
  height: 325.52px;
  flex: none;
  flex-grow: 0;
  transform: rotate(39.08deg);
  border-radius: 27px;
  backdrop-filter: blur(10px);
  background: linear-gradient(137.56deg, rgb(32, 36, 32) 23.825%,rgba(32, 36, 32, 0) 124.544%);
`