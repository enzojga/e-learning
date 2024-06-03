import React from 'react'
import { FeatureContainer, FeatureTextContainer } from './Features.styled'
import { GradientImage, GrayParagraph, WhiteParagraph } from '../../../styles/Generics/Generics'
import SwiperContainer from './Swiper/Swiper'
import featureImage from '../../../assets/feature-image.svg';

const Features = () => {
  return (
    <FeatureContainer id='Features' turncolumnontablet={true}>
      <FeatureTextContainer>
        <WhiteParagraph>
          Study Anywhere Easily Online
        </WhiteParagraph>
        <GrayParagraph>
          Discover the freedom of online learning. Our platform empowers you to access quality education from the comfort of your home or on the go.
        </GrayParagraph>
        <SwiperContainer />
      </FeatureTextContainer>
      <GradientImage src={featureImage}/>
    </FeatureContainer>
  )
}

export default Features