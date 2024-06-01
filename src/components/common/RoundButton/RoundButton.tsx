import arrow from '../../../assets/arrow.svg'
import { RoundButtonProps } from './RoundButton.interface'
import { RoundButtonContainer } from './RoundButton.styled'

const RoundButton = ({rotate, onClick}: RoundButtonProps) => {
  return (
    <RoundButtonContainer rotate={rotate} onClick={onClick}>
      <img src={arrow} alt='e-learning logo' width={24} height={24} aria-label="Lerntolern Logo" />
    </RoundButtonContainer>
  )
}

export default RoundButton