import Button from '../../common/Button/Button';
import { Header, ButtonContainer } from './Navbar.styled';
import { FlexContainer } from '../../../styles/Generics/Generics';
import RoundButton from '../../common/RoundButton/RoundButton';
import { useState } from 'react';
import Logo from '../../common/Logo/Logo';
import Navigation from '../../common/Navigation/Navigation';

const Navbar = () => {
  const [rotation, setRotation] = useState(90);
  const [expandArea, setExpandArea] = useState(false);

  function handleAreaExpansion() {
    setExpandArea((prevExpandArea) => {
      const newExpandArea = !prevExpandArea;
      const newRotation = newExpandArea ? 270 : 90;
      setRotation(newRotation);
      return newExpandArea;
    });
  }

  return (
    <Header expanded={expandArea}>
      <Logo />
      <ButtonContainer>
        <RoundButton onClick={handleAreaExpansion} rotate={rotation} aria-expanded={expandArea} />
      </ButtonContainer>
      <Navigation />
      <FlexContainer gap='12px' disapearontablet={true}>
        <Button text='LOG IN'></Button>
        <Button darkMode={true} text='SIGN IN'></Button>
      </FlexContainer>
    </Header>
  );
};

export default Navbar;
