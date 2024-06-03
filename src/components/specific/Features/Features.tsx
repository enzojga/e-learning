import React from 'react'
import { ButtonContainerBorderless, FeatureContainer, FeatureTextContainer } from './Features.styled'
import { FlexContainer, GradientImage, GrayParagraph, WhiteParagraph } from '../../../styles/Generics/Generics'
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
      <FlexContainer>
        <GradientImage src={featureImage}/>
        <ButtonContainerBorderless
          style={{top:'40%', left: '25%'}}
          darkMode={true}
        >
          ANYWHERE
        </ButtonContainerBorderless>
        <ButtonContainerBorderless
          style={{top:'50%', left: '35%'}}
          darkMode={true}
        >
          EASY
        </ButtonContainerBorderless>
      </FlexContainer>
    </FeatureContainer>
  )
}

export default Features