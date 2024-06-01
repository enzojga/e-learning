import styled from "styled-components";
import { HeaderProps } from "./Navbar.interace";

export const Header = styled.header<HeaderProps>`
  display: flex;
  align-items: ${props => props.expanded ? 'start' : 'center'};
  justify-content: space-around;
  border: 2px solid;
  background-color: black;
  height: ${props => props.expanded ? '60vh' : '5rem'};
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px
`;

export const NavItem = styled.li`
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  font-family: 'Poppins', sans-serif;
  &:hover {
    text-decoration: underline;
  }
`;

export const LogoText = styled.p`
  color: white;
  font-weight: 700;
  font-size: 24px;
`;

export const ButtonContainer = styled.div`
  @media (min-width: 1023px) {
    display: none;
}`;

export const Navigation = styled.nav`
  @media (max-width: 1023px) {
    display: none;
}
`