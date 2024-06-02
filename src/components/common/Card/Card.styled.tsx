import styled from "styled-components";
import { FlexContainer } from "../../../styles/Generics/Generics";
import { CardContainerProps } from "./Card.interface";

export const CardContainer = styled(FlexContainer)<CardContainerProps>`
  position: ${props => props.top || props.right ? 'absolute' : 'initial' };
  width: 119px;
  height: 129px;
  right: ${props => props.right ? props.right : 'initial' };
  top: ${props => props.top ? props.top : 'initial' };
  bottom: 410px;

  flex-direction: column;
  border-radius: 16px;
  background: radial-gradient(121.40% 123.45% at 50% 28.999999999999996%,rgb(47, 47, 47) 35.251%,rgb(1, 254, 132) 100%);
`

export const CardText = styled.h3`
  color: rgb(255, 255, 255);
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
  margin-top: 18px;
`