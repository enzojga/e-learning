import { Props } from './Button.interface';
import { ButtonContainer } from './Button.styled';

const Button = ({text, darkMode}: Props) => {
  
  return (
    <ButtonContainer darkMode={darkMode}>
        {text}
    </ButtonContainer>
  )
}

export default Button