import { FlexContainer, FlexContainerColumn, GrayParagraph, WhiteParagraph } from '../../../styles/Generics/Generics'
import { CategoryParagraph, DashboardContainer, TextsContainer } from './Dashboard.styled'
import Card from '../../common/Card/Card'
import { classesList } from '../../../constants/ClassesConstants/Classes.constants'
import PricingCard from '../Pricing/PricingCard/PricingCard'
import { mentorsList } from '../../../constants/MentorConstants/Mentor.constants'
import MentorCard from '../Mentors/MentorCard/MentorCard'

const Dashboard = () => {
  return (
    <DashboardContainer gap='36px'>
      <TextsContainer>
        <WhiteParagraph>
          It seems that you haven't started your classes yet.
        </WhiteParagraph>
        <GrayParagraph>
          You can choose between categories, tutors, or classes.
        </GrayParagraph>
      </TextsContainer>
      <FlexContainerColumn gap='32px'>
        <FlexContainerColumn gap='32px'>
          <CategoryParagraph>Categories</CategoryParagraph>
          <FlexContainer gap='32px'>
            <Card icon='illustration'/>
            <Card icon='uiUx'/>
            <Card icon='logo'/>
          </FlexContainer>
        </FlexContainerColumn>
        <FlexContainerColumn>
          <CategoryParagraph>Classes</CategoryParagraph>
          <FlexContainer gap='12px'>
            {classesList.map((classItem, index) => (
              <PricingCard 
                key={index}
                title={classItem.title} 
                description={classItem.description}
                rate={classItem.rate}
                lessons={classItem.lessons}
              ></PricingCard>
            ))}
          </FlexContainer>
        </FlexContainerColumn>
        <FlexContainerColumn>
          <CategoryParagraph>Tutors</CategoryParagraph>
          <FlexContainer gap='12px'>
            {mentorsList.map((mentor, index) => (
              <MentorCard key={index} name={mentor.name} role={mentor.role}/>
            ))}
          </FlexContainer>
        </FlexContainerColumn>

      </FlexContainerColumn>
    </DashboardContainer>
  )
}

export default Dashboard