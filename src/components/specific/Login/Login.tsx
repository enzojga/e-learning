import React, { useContext, useState } from 'react'
import { LoginContainer } from './Login.styled';
import { MsalProvider } from '@azure/msal-react';
import msalInstance from '../../../config/Auth.config';
import LoginMicrosoft from './LoginMicrosoft/LoginMicrosoft';
import { FlexContainerImage, GrayParagraph, InputText, LoginFormWarp, WhiteParagraph } from '../../../styles/Generics/Generics';
import { toast } from 'react-toastify';
import Button from '../../common/Button/Button';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { Navigate, useNavigate } from 'react-router-dom';
import UserContext from '../../../contexts/UserContext/UserContext';

const Login = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userCreated, setUserCreated] = useLocalStorage('userCreated', {});
  const { userData, setUserData } = useContext(UserContext);

  if(userData.token && userData.token !== true) {
    return <Navigate to='/dashboard' replace />;
  }

  function handleRequest(e: any) {
    console.log(e);
    e.preventDefault();

    if(username.length < 5 || password.length < 5) {
      toast.error("Os campos de usuário e senha precisam ter ao menos 5 carácteres!");
      return;
    }
    if(!userCreated) {
      toast.error("User does note exists!");
      return;
    }
    if(userCreated.username === username && userCreated.password === password){
      toast.success("Login sucessful!");
      setUserData({token: true, username});
      setTimeout(() => {
        navigate('/dashboard');
      }, 500);  
    } else {
      toast.error("Credentials incorrect!");
      return;
    }
  }

  return (
    <LoginContainer>
        <FlexContainerImage>
          <WhiteParagraph>Welcome Back, <br/> Explorer!</WhiteParagraph>
        </FlexContainerImage>
        <LoginFormWarp gap='16px' onSubmit={handleRequest}>
          <WhiteParagraph>Sign In</WhiteParagraph>
          <MsalProvider instance={msalInstance}>
            <LoginMicrosoft />
          </MsalProvider>
          <GrayParagraph>Or</GrayParagraph>
          <InputText
              width='90%'
              type="text"
              name="text"
              placeholder="Username"
              onChange={e => setUsername(e.target.value)}
            />
          <InputText
            width='90%'
            type="password"
            name="text"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
          <Button isSubmit={true} width='90%' text='Sign In'/>
          <Button onClick={() => {navigate('/signup')}} width='90%' text='Create an account' darkMode={true}/>
        </LoginFormWarp>
    </LoginContainer>
  )
}

export default Login;
