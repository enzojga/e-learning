import styled from "styled-components";
import { HeaderProps } from "./Navbar.interace";

export const Header = styled.header`
  display: flex;
  align-items: ${props => props.expanded ? 'start' : 'center'};
  justify-content: space-around;
  border: 2px solid;
  background-color: black;
  height: ${props => props.expanded ? '60vh' : '5rem'};
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
`;

export const ButtonContainer = styled.div`
  @media (min-width: 1023px) {
    display: none;
}`;

export const WelcomeText = styled.p`
  color: white;
  font-weight: 700;
  font-size: 24px;
  text-overflow: ...;
`;
