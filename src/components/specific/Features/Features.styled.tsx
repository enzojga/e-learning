import styled from "styled-components";
import { FlexContainer, FlexContainerColumn } from "../../../styles/Generics/Generics";
import { ButtonContainer } from "../../common/Button/Button.styled";

export const FeatureContainer = styled(FlexContainer)`
  height: calc(100vh - 5rem);
  justify-content: space-around;
  @media (max-width: 1023px) {
    height: 100%;
  }
`;

export const FeatureTextContainer = styled(FlexContainerColumn)`
  align-items: start;
  gap: 16px;
  width: 30vw;
  @media (max-width: 1023px) {
    width: 90vw;
    align-items: center;
    & > p {
      text-align: center;
    }
  }
`;

export const ButtonContainerBorderless = styled(ButtonContainer)`
  border: none;
  position: absolute;
  background: rgb(29, 34, 29);
  cursor: initial;
`;