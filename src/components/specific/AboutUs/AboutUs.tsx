import React from 'react'
import { FlexContainer } from '../../../styles/Generics/Generics'
import AboutUsSwiper from './AboutUsSwiper/AboutUsSwiper'
import { FloatWhiteParagraph } from './AboutUs.styled'

const AboutUs = () => {
  return (
    <FlexContainer>
      <FloatWhiteParagraph>What Our <br /> Students Are <br /> Saying</FloatWhiteParagraph>
      <AboutUsSwiper/>
    </FlexContainer>
  )
}

export default AboutUs