import { Props } from './Button.interface';
import { ButtonContainer } from './Button.styled';

const Button = ({text, darkMode, width}: Props) => {
  
  return (
    <ButtonContainer width={width} darkMode={darkMode}>
        {text}
    </ButtonContainer>
  )
}

export default Button