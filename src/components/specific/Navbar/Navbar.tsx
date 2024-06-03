import Button from '../../common/Button/Button';
import { Header, ButtonContainer, WelcomeText } from './Navbar.styled';
import { FlexContainer } from '../../../styles/Generics/Generics';
import RoundButton from '../../common/RoundButton/RoundButton';
import { useContext, useState } from 'react';
import Logo from '../../common/Logo/Logo';
import Navigation from '../../common/Navigation/Navigation';
import { useNavigate } from 'react-router-dom';
import { NavbarProps } from './Navbar.interace';
import UserContext from '../../../contexts/UserContext/UserContext';

const Navbar = ({ isLogged }: NavbarProps) => {
  const navigate = useNavigate();

  const { userData } = useContext(UserContext);

  return (
    <Header>
      <Logo />
      
      {!isLogged ? <>
          <ButtonContainer>
            <Button text='LOG IN' onClick={() => {navigate('/login')}}></Button>
          </ButtonContainer>
          <Navigation />
          <FlexContainer gap='12px' disapearontablet={true}>
            <Button text='LOG IN' onClick={() => {navigate('/login')}}></Button>
            <Button darkMode={true} text='SIGN UP' onClick={() => {navigate('/signup')}}></Button>
          </FlexContainer></> 
        : <>
          <WelcomeText>Welcome, {userData.username.split(' ')[0]}.</WelcomeText>
        </>}
    </Header>
  );
};

export default Navbar;
