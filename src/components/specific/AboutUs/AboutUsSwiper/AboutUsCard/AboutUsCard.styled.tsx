import styled from "styled-components";
import { FlexContainer } from "../../../../../styles/Generics/Generics";

export const CardCointainer = styled(FlexContainer)`
  width: 80vw;
  height: 70vh;
  align-items: end;
  @media (max-width: 1023px) {
    align-items: center;
    & > img {
        display: none;
      };
  };
`;

export const InvertedFlexContainer = styled(FlexContainer)`
  max-width: 30vw;
  justify-content: start;
  margin-bottom: 42px;
  @media (max-width: 1023px) {
    justify-content: center;
  }
  @media (max-width: 1023px){
    max-width: 80vw;
    & > p {
      text-align: center;
    } 
  }
`;

export const NameParagraph = styled.p`
  color: rgb(251, 242, 242);
  font-family: 'Poppins', sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 44px;
  text-align: left;
`;
