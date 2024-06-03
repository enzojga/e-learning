import { Props } from './Button.interface';
import { ButtonContainer } from './Button.styled';

const Button = ({text, darkMode, width, onClick}: Props) => {
  
  return (
    <ButtonContainer width={width} darkMode={darkMode} onClick={onClick}>
        {text}
    </ButtonContainer>
  )
}

export default Button