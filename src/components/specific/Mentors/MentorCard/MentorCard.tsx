import { MentorInterface } from '../../../../constants/MentorConstants/MentorCard.interface';
import { CardDescription, CardIcon, CardTitle, MentorContainer } from './MentorCard.styled'

const MentorCard = ({name, role}: MentorInterface) => {
  return (
    <MentorContainer>
      <CardIcon></CardIcon>
      <CardTitle>{name}</CardTitle>
      <CardDescription>{role}</CardDescription>
    </MentorContainer>
  )
}

export default MentorCard;
