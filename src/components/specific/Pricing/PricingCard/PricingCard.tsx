import React from 'react'
import { ClassDescription, ClassIcon, ClassTitle, DetailsText, PricingCardContainer } from './PricingCard.styled'
import { PricingCardProps } from './PricingCard.interface'
import { FlexContainer } from '../../../../styles/Generics/Generics'
import clipboard from '../../../../assets/clipboard.svg';
import star from '../../../../assets/star.svg';

const PricingCard = ({...props}: PricingCardProps) => {
  return (
    <PricingCardContainer>
        <ClassIcon></ClassIcon>
        <ClassTitle>{props.title}</ClassTitle>
        <ClassDescription>{props.description}</ClassDescription>
        <FlexContainer gap='5px'>
          <FlexContainer gap='5px'>
            <img src={star}/>
            <DetailsText>{props.rate}</DetailsText>
          </FlexContainer>
          <FlexContainer gap='5px'>
            <img src={clipboard}/>
            <DetailsText>{props.lessons}</DetailsText>
          </FlexContainer>
        </FlexContainer>
    </PricingCardContainer>
  )
}

export default PricingCard