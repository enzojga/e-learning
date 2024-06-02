import styled from "styled-components";
import { FlexContainerColumn } from "../../../../styles/Generics/Generics";

export const CardIcon = styled.div`
  position: static;
  width: 295px;
  height: 330px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 16px 0px;
  border-radius: 16px;
  background: rgb(49, 54, 49);
`;

export const CardTitle = styled.h4`
  color: rgb(255, 255, 255);
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;  
`;

export const CardDescription = styled.h4`
  color: rgb(112, 113, 112);
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  text-transform: capitalize;`
;

export const MentorContainer = styled(FlexContainerColumn)`
  align-items: start;
`;