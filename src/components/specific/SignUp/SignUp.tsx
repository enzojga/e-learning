import React from 'react'
import { SignUpContainer } from './SignUp.styled'
import { LoginFormWarp } from '../../../styles/Generics/Generics'
import loginImage from '../../../assets/login-image.svg';

const SignUp = () => {
  return (
    <SignUpContainer>
        <LoginFormWarp>
        </LoginFormWarp>
        <img src={loginImage} alt='Signup'/>
    </SignUpContainer>
  )
}

export default SignUp