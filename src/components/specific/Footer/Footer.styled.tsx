import styled from "styled-components";
import { FlexContainer, FlexContainerColumn } from "../../../styles/Generics/Generics";

export const FooterContainer = styled(FlexContainerColumn).attrs({ as: 'footer' })`
  background: rgb(31, 36, 31);
  padding: 47px 0px 47px 0px;
  width: 100vw;
  margin-top: 36px;
`;

export const ButtonWarper = styled.span`
  position: absolute;
  right: 1px;
  bottom: 12px;
`;

export const FooterText = styled.p`
  color: rgb(140, 143, 153);
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;

export const FooterBottomContainer = styled(FlexContainer)`
  width: 100%;
  justify-content: space-around;
  align-items: end;
`;

export const NewsLetterContainer = styled(FlexContainerColumn)`
  align-items: start;
`;