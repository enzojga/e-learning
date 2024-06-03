import React from 'react'
import { LoginContainer, LoginFormWarp } from './Login.styled'
import loginImage from '../../../assets/login-image.svg'

const Login = () => {
  return (
    <LoginContainer>
        <img src={loginImage} alt='login'/>
        <LoginFormWarp>
            
        </LoginFormWarp>
    </LoginContainer>
  )
}

export default Login