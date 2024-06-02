import { GrayParagraph } from '../../../../../styles/Generics/Generics';
import student from '../../../../../assets/student.svg';
import { Review } from '../../../../../constants/ReviewsConstants/Reviews.interface';
import { CardCointainer, InvertedFlexContainer, NameParagraph } from './AboutUsCard.styled';

const AboutUsCard = ({name, description}: Review) => {
  return (
    <CardCointainer gap='80px'>
      <img src={student} alt='Student'/>
      <InvertedFlexContainer gap='12px'>
        <NameParagraph>{name}</NameParagraph>
        <GrayParagraph>{description}</GrayParagraph>
      </InvertedFlexContainer>
    </CardCointainer>
  )
}

export default AboutUsCard;
