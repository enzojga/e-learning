import { Props } from './Button.interface';
import { ButtonContainer } from './Button.styled';

const Button = ({text, darkMode, width, onClick, isSubmit}: Props) => {
  
  return (
    <ButtonContainer type={isSubmit ? 'submit' : 'button'} width={width} darkMode={darkMode} onClick={onClick}>
        {text}
    </ButtonContainer>
  )
}

export default Button