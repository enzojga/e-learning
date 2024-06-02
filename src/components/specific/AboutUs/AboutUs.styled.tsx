import styled from "styled-components";
import { FlexContainer, WhiteParagraph } from "../../../styles/Generics/Generics";

export const FloatWhiteParagraph = styled(WhiteParagraph)`
  position: absolute;
  top: 25%;
  right: 41%;
  width: 50vw;
  transform: translate(75%, 0);
  @media (max-width: 1023px) {
    position: initial;
    width: 80vw;
    transform: translate(0, 0);
  }
`;

export const AboutUsContainer = styled(FlexContainer)`
  position: relative;
`;