import React from 'react'
import { ClassDescription, ClassIcon, ClassTitle, DetailsText, PricingCardContainer } from './PricingCard.styled'
import { FlexContainer } from '../../../../styles/Generics/Generics'
import clipboard from '../../../../assets/clipboard.svg';
import star from '../../../../assets/star.svg';
import { Classes } from '../../../../constants/ClassesConstants/Classes.constants.interface';

const PricingCard = ({...props}: Classes) => {
  return (
    <PricingCardContainer>
        <ClassIcon></ClassIcon>
        <ClassTitle>{props.title}</ClassTitle>
        <ClassDescription>{props.description}</ClassDescription>
        <FlexContainer gap='5px'>
          <FlexContainer gap='5px'>
            <img src={star} alt='star'/>
            <DetailsText>{props.rate}</DetailsText>
          </FlexContainer>
          <FlexContainer gap='5px'>
            <img src={clipboard} alt='clipboard'/>
            <DetailsText>{props.lessons}</DetailsText>
          </FlexContainer>
        </FlexContainer>
    </PricingCardContainer>
  )
}

export default PricingCard