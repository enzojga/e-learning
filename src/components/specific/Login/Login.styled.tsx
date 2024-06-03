import styled from "styled-components";
import { FlexContainer, FlexContainerColumn } from "../../../styles/Generics/Generics";

export const LoginContainer = styled(FlexContainer)`
  height: calc(100vh - 80px - 32px);
  justify-content: space-around
`;

export const LoginFormWarp = styled(FlexContainerColumn).attrs({ as: 'form' })`
  box-shadow: 0px 4px 59px 0px rgba(1, 254, 132, 0.4), 0px 0px 10px 5px rgba(1, 254, 132, 0.4);
  background: rgb(31, 36, 31);
  width: 500px;
  height: 400px;
  border-radius: 16px
`