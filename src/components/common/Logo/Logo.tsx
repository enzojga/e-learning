import React from 'react'
import logo from '../../../assets/logo.svg';
import { FlexContainer } from '../../../styles/Generics/Generics';
import { LogoContainer, LogoText } from './Logo.styled';
import { useNavigate } from 'react-router-dom';

const Logo = () => {

  const navigate = useNavigate();

  return (
    <LogoContainer onClick={() => {navigate('/')}}>
      <img src={logo} alt='e-learning logo' aria-label="Lerntolern Logo" />
      <LogoText>Lerntolern</LogoText>
    </LogoContainer>
  )
}

export default Logo