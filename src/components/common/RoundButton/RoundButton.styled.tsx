import styled from "styled-components";
import { RoundButtonProps } from "./RoundButton.interface";

export const RoundButtonContainer = styled.button<RoundButtonProps>`
  width: 48px;
  height: 48px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 12px;

  box-sizing: border-box;
  border: 1px solid rgb(1, 254, 132);
  border-radius: 57px;

  transform: ${props => props.rotate ?  
      'rotate(' + props.rotate + 'deg)' :
      'inherit'};
`;
