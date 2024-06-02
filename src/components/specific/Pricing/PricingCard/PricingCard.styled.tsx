import styled from "styled-components";
import { FlexContainerColumn } from "../../../../styles/Generics/Generics";

export const PricingCardContainer = styled(FlexContainerColumn)`
  align-items: start;
  max-width: 397px;
  @media (max-width: 1023px) {
    max-width: 80vw;
  }
`;

export const ClassIcon = styled.div`
  position: static;
  width: 397px;
  height: 169px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 29px 0px;

  border-radius: 16px;
  background: rgb(49, 54, 49);

  @media (max-width: 1023px) {
    max-width: 80vw;
  }
`;

export const ClassTitle = styled.h3`
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
`;

export const ClassDescription = styled.p`
  color: rgb(140, 143, 153);
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  max-width: 350px
`;

export const DetailsText = styled.span`
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
`