import { CardContainer, CardText } from './Card.styled'
import { CardProps } from './Card.interface'
import illustration from '../../../assets/illustration.svg';
import uiUx from '../../../assets/ui-ux.svg';
import logo from '../../../assets/logo-icon.svg';

const Card = ({ icon, top, right }: CardProps) => {
  const icons = {
    illustration,
    uiUx,
    logo
  }

  const texts = {
    illustration: 'Illustration',
    uiUx: 'UI/UX',
    logo: 'Logo'
  }

  return (
    <CardContainer top={top} right={right}>
      <img src={icons[icon]} alt='icon' width={62} height={62}/>
      <CardText>{texts[icon]}</CardText>
    </CardContainer>
  )
}

export default Card