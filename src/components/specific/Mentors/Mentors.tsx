import React from 'react'
import { FlexContainer, FlexContainerColumn, WhiteParagraph } from '../../../styles/Generics/Generics'
import { DetailsParagraph, TextContainer } from './Mentors.styled'
import { mentorsList } from '../../../constants/MentorConstants/Mentor.constants'
import MentorCard from './MentorCard/MentorCard'
import Button from '../../common/Button/Button'

const Mentors = () => {
  return (
    <FlexContainerColumn gap='32px'>
      <TextContainer turncolumnontablet={true}>
        <WhiteParagraph>
          Professional Mentor
        </WhiteParagraph>
        <DetailsParagraph>
          Are you looking to advance your career, gain industry insights, or receive expert guidance in your professional journey? Our Professional Mentor program is designed to connect you with seasoned experts who can provide invaluable mentorship.
        </DetailsParagraph>
      </TextContainer>
      <FlexContainer gap='12px' turncolumnontablet={true}>
        {mentorsList.map((mentor, index) => (
          <MentorCard key={index} name={mentor.name} role={mentor.role}/>
        ))}
      </FlexContainer>
      <Button text='Show More' width='196px'/>
    </FlexContainerColumn>
  )
}

export default Mentors