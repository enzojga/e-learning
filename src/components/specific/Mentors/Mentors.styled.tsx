import styled from "styled-components";
import { FlexContainer, GrayParagraph } from "../../../styles/Generics/Generics";

export const TextContainer = styled(FlexContainer)`
  justify-content: space-around;
  width: 100%;

  :first-child {
    max-width: 30vw;
    @media (max-width: 1023px) {
      text-align: center;
      max-width: 80vw;
    }  
  }

  :nth-child(2) {
    max-width: 35vw;
    @media (max-width: 1023px) {
      text-align: center;
      max-width: 80vw;
    }  
  }
`;

export const DetailsParagraph = styled(GrayParagraph)`
  color: rgb(140, 143, 153);
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
`;
