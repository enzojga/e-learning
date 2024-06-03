import { ButtonWarper, FooterBottomContainer, FooterContainer, FooterText, NewsLetterContainer } from './Footer.styled'
import Logo from '../../common/Logo/Logo';
import { InputText } from '../../../styles/Generics/Generics';
import Navigation from '../../common/Navigation/Navigation';
import Button from '../../common/Button/Button';
import { FooterProps } from './Footer.interface';

const Footer = ({ hideNavigation }: FooterProps) => {
  return (
    <FooterContainer gap='32px'>
      <Logo />
      {hideNavigation ? <></> : <Navigation />}
      <FooterBottomContainer>
        <NewsLetterContainer>
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