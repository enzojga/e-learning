import styled from "styled-components";
import { FlexContainer, FlexContainerColumn } from "../../../styles/Generics/Generics";

export const HomeContainer = styled(FlexContainer)`
  background-color: black;
  height: calc(100vh - 5rem);
  justify-content: space-around;
  @media (max-width: 1023px) {
    height: 100%;
    flex-direction: column-reverse;
  }
  margin-top: 80px;
`;

export const MainParagraph = styled.p`
  color: rgb(255, 255, 255);
  font-size: 72px;
  font-weight: 600;
  line-height: 76px;
  text-align: left;
  text-transform: capitalize;
  @media (max-width: 1023px) {
    text-align: center;
  }
`;

export const SecundaryParagraph = styled.p`
  color: rgb(140, 143, 153);
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  text-align: left;
  margin: 16px 0 40px 0;
  @media (max-width: 1023px) {
    text-align: center;
    margin: 16px 0 14px 0;
  }
`;

export const HomeTextContainer = styled(FlexContainerColumn)`
  align-items: start;
  gap: 16px;
  width: 30vw;
  @media (max-width: 1023px) {
    width: 90vw;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  @media (max-width: 1023px) {
    height: 100%;
    width: 100vw;
  }
`;
