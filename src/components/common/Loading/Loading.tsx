import React from 'react'
import circle from '../../../assets/circle.svg';
import { AnimatedImage, LoadginContainer } from './Loading.styled';

const Loading = () => {
  return (
    <LoadginContainer>
      <AnimatedImage src={circle} alt='loading'/>
    </LoadginContainer>
  )
}

export default Loading;
