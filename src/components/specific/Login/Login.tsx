import React from 'react'
import { LoginContainer } from './Login.styled';
import loginImage from '../../../assets/login-image.svg';
import { MsalProvider } from '@azure/msal-react';
import msalInstance from '../../../config/Auth.config';
import LoginMicrosoft from './LoginMicrosoft/LoginMicrosoft';
import { LoginFormWarp } from '../../../styles/Generics/Generics';

const Login = () => {
 
  return (
    <LoginContainer>
        <img src={loginImage} alt='login'/>
        <LoginFormWarp>
            <MsalProvider instance={msalInstance}>
              <LoginMicrosoft />
            </MsalProvider>
        </LoginFormWarp>
    </LoginContainer>
  )
}

export default Login;
