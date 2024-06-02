import React from 'react'
import { FlexContainer, FlexContainerColumn, WhiteParagraph } from '../../../styles/Generics/Generics'
import PricingCard from './PricingCard/PricingCard'
import Button from '../../common/Button/Button'

const Pricing = () => {
  return (
    <FlexContainerColumn gap='34px'>
      <WhiteParagraph>
        Favorite Class
      </WhiteParagraph>
      <FlexContainer gap='13px'>
        <PricingCard title='Logo Branding Guideline' description='Teste' rate='5,0' lessons='22 Lessons'/>
        <PricingCard title='Logo Branding Guideline' description='Teste' rate='5,0' lessons='22 Lessons'/>
        <PricingCard title='Logo Branding Guideline' description='Teste' rate='5,0' lessons='22 Lessons'/>
      </FlexContainer>
      <Button text='Show All Class' width='196px;'/>
    </FlexContainerColumn>
  )
}

export default Pricing