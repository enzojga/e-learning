import styled from "styled-components";

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

export const NavigationContainer = styled.nav`
  @media (max-width: 1023px) {
    display: none;
}
`;
