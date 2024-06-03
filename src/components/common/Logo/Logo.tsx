import React from 'react'
import logo from '../../../assets/logo.svg';
import { FlexContainer } from '../../../styles/Generics/Generics';
import { LogoText } from './Logo.styled';

const Logo = () => {
  return (
    <FlexContainer>
      <img src={logo} alt='e-learning logo' aria-label="Lerntolern Logo" />
      <LogoText>Lerntolern</LogoText>
    </FlexContainer>
  )
}

export default Logo