import Button from '../../common/Button/Button';
import { LogoText, Header, NavItem, NavItems, ButtonContainer, Navigation } from './Navbar.styled';
import logo from '../../../assets/logo.svg';
import { FlexContainer } from '../../../styles/Generics/Generics';
import RoundButton from '../../common/RoundButton/RoundButton';
import { useState } from 'react';
import { pages } from '../../../constants/PagesConstants/Pages.constants';

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
      <FlexContainer>
        <img src={logo} alt='e-learning logo' width={35} height={35} aria-label="Lerntolern Logo" />
        <LogoText>Lerntolern</LogoText>
      </FlexContainer>
      <ButtonContainer>
        <RoundButton onClick={handleAreaExpansion} rotate={rotation} aria-expanded={expandArea} />
      </ButtonContainer>
      <Navigation>
        <NavItems>
          {pages.map((page, index) => (
            <NavItem key={index}>{page.label}</NavItem>
          ))}
        </NavItems>
      </Navigation>
      <FlexContainer gap='12px' disapearontablet={true}>
        <Button text='LOG IN'></Button>
        <Button darkMode={true} text='SIGN IN'></Button>
      </FlexContainer>
    </Header>
  );
};

export default Navbar;
