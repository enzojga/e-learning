import React, { useState } from 'react'
import { SignUpContainer } from './SignUp.styled'
import { FlexContainerImage, InputText, LoginFormWarp, WhiteParagraph } from '../../../styles/Generics/Generics'
import Button from '../../common/Button/Button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../../hooks/useLocalStorage';

const SignUp = () => {

  const navigate = useNavigate();
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userCreated, setUserCreated] = useLocalStorage('userCreated', {});

  function handleRequest(e: any) {
    e.preventDefault();
    if(password !== confirmPassword) {
        toast.error("As senhas devem coincidir!");
        return;
    }
    if(username.length < 5 || password.length < 5) {
        toast.error("Os campos de usuário e senha precisam ter ao menos 5 carácteres!");
        return;
    }
    setUserCreated({username, password});
    toast.success("Conta criada com sucesso!");
    setTimeout(() => {
      navigate('/login');
    }, 500);
  }

  return (
    <SignUpContainer>
        <LoginFormWarp onSubmit={handleRequest} gap='13px'>
          <WhiteParagraph>Sign Up</WhiteParagraph>
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
          <InputText
            width='90%'
            type="password"
            name="text"
            placeholder="Confirm password"
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <Button isSubmit={true} width='90%' text='Create account'/>
          <Button onClick={() => {navigate('/login')}} darkMode={true} width='90%' text='Login'/>
        </LoginFormWarp>
        <FlexContainerImage>
          <WhiteParagraph>Start Your <br/> Journey!</WhiteParagraph>
        </FlexContainerImage>
    </SignUpContainer>
  )
}

export default SignUp