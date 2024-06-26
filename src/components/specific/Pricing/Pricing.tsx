import React from 'react'
import { FlexContainer, FlexContainerColumn, WhiteParagraph } from '../../../styles/Generics/Generics'
import PricingCard from './PricingCard/PricingCard'
import Button from '../../common/Button/Button'
import { classesList } from '../../../constants/ClassesConstants/Classes.constants'
import { toast } from 'react-toastify'

const Pricing = () => {

  const classesWarning = () => {
    toast.warning('No more classes to show.')
  }

  return (
    <FlexContainerColumn id='Class' gap='34px'>
      <WhiteParagraph>
        Favorite Class
      </WhiteParagraph>
      <FlexContainer turncolumnontablet={true} gap='13px'>
        {classesList.map((classItem, index) => (
          <PricingCard 
            title={classItem.title} 
            description={classItem.description}
            rate={classItem.rate}
            lessons={classItem.lessons}
          ></PricingCard>
        ))}
      </FlexContainer>
      <Button onClick={classesWarning} text='Show All Class' width='196px;'/>
    </FlexContainerColumn>
  )
}

export default Pricing