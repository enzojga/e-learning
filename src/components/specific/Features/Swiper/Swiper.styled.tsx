import styled from "styled-components";
import { FlexContainer } from "../../../../styles/Generics/Generics";

export const SwiperContainer = styled.div`
  position: relative;
  width: 80%;
  @media (max-width: 1023px) {
    width: 40vw;
  }
`;

export const SwiperButtonContainer = styled(FlexContainer)`
  position: absolute;
  height: 100%;
  width: 30%;
  justify-content: right;
  top: 0;
  right: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 50%, rgba(0, 0, 0, 1) 100%);
  z-index: 3;
`;
