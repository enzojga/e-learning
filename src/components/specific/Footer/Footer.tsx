import { ButtonWarper, FooterBottomContainer, FooterContainer, FooterText, NewsLetterContainer } from './Footer.styled'
import Logo from '../../common/Logo/Logo';
import { InputText } from '../../../styles/Generics/Generics';
import Navigation from '../../common/Navigation/Navigation';
import Button from '../../common/Button/Button';

const Footer = () => {
  return (
    <FooterContainer gap='32px'>
      <Logo />
      <Navigation />
      <FooterBottomContainer>
        <NewsLetterContainer gap='12px'>
          <FooterText>Newsletter</FooterText>
          <InputText placeholder='Enter your email'/>
          <ButtonWarper>
            <Button text='Subscribe' width='196px'/>
          </ButtonWarper>
        </NewsLetterContainer>
        <FooterText>©  2024 Lerntolern. All right reserved</FooterText>
      </FooterBottomContainer>
    </FooterContainer>
  )
}

export default Footer;