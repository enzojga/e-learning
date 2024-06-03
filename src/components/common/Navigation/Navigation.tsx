import React from 'react'
import { NavItem, NavItems, NavigationContainer } from './Navigation.styled'
import { pages } from '../../../constants/PagesConstants/Pages.constants';

const Navigation = () => {
  return (
    <NavigationContainer>
    <NavItems>
      {pages.map((page, index) => (
        <NavItem key={index}>{page.label}</NavItem>
      ))}
    </NavItems>
  </NavigationContainer>

  )
}

export default Navigation