import styled from "styled-components";
import { FlexContainer, FlexContainerImage } from "../../../styles/Generics/Generics";
import shapeImage from "../../../assets/shape.svg";

export const DashboardContainer = styled(FlexContainer)`
  min-height: 100vh;
  justify-content: space-around;
  p {
    text-align: center;
  }
`;

export const ShapeContainerImage = styled(FlexContainerImage)`
  background-image: url(${shapeImage});
  max-width: 30vw;
  max-height: 30vw;
`;

export const CategoryParagraph = styled.p`
  color: rgb(251, 242, 242);
  font-family: 'Poppins', sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 44px;
  text-align: left;
`;
