import React, { useRef } from 'react'
import { NavItem, NavItems, NavigationContainer } from './Navigation.styled'
import { pages } from '../../../constants/PagesConstants/Pages.constants';

const Navigation = () => {

  const handleNavigation = (id: string) => {
    const element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  return (
    <NavigationContainer>
    <NavItems>
      {pages.map((page, index) => (
        <NavItem 
          onClick={() => { handleNavigation(page.label) }}
          key={index}
        >
          {page.label}
        </NavItem>
      ))}
    </NavItems>
  </NavigationContainer>

  )
}

export default Navigation