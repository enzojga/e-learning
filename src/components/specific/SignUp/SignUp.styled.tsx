import styled from "styled-components";
import { FlexContainer, WhiteParagraph } from "../../../styles/Generics/Generics";
import loginImage from '../../../assets/login-image.svg';

export const SignUpContainer = styled(FlexContainer)`
  height: calc(100vh - 80px - 32px);
  justify-content: space-around;
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