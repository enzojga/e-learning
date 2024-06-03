import styled from "styled-components";
import { FlexContainerProps, InputProps } from "./Generics.interface";
import loginImage from '../../assets/login-image.svg';

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
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
`;

export const InputText = styled.input<InputProps>`
  position: static;
  width: ${props => props.width ? props.width : '426px'};
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 0px 0px 24px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 12px 0px;
  box-sizing: border-box;
  border: 1px solid rgba(1, 254, 132, 0.5);
  border-radius: 999px;
  background-color: inherit;
  color: rgba(1, 254, 132, 0.5);
  font-weight: 600;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  &:focus {
    border-color: rgba(1, 254, 132, 0.5);
    outline: none;
  }
  &::placeholder {
    color: rgba(1, 254, 132, 0.5);
    font-style: none;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
  }
  @media (max-width: 1023px) {
    width: ${props => props.width ? props.width : '95vw'};
  }
`;

export const LoginFormWarp = styled(FlexContainerColumn).attrs({ as: 'form' })`
  box-shadow: 0px 4px 59px 0px rgba(1, 254, 132, 0.4), 0px 0px 10px 5px rgba(1, 254, 132, 0.4);
  background: rgb(31, 36, 31);
  width: 500px;
  min-height: 70vh;
  border-radius: 16px;
  @media (max-width: 1023px) {
    width: 100vw;
    border-radius: 0;
  }
`;

export const FlexContainerImage = styled(FlexContainer)`
  background-image: url(${loginImage});
  background-size: cover;
  background-position: center;
  width: 40vw;
  height: 40vw;
  & > p {
    text-align: center;
  }
  @media (max-width: 1023px) {
    display: none;
  }
`;
