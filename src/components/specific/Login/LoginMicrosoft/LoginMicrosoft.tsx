import { AuthenticatedTemplate, UnauthenticatedTemplate, useAccount, useMsal } from '@azure/msal-react';
import { loginRequest } from '../../../../config/Auth.config';
import Button from '../../../common/Button/Button';
import { FlexContainer } from '../../../../styles/Generics/Generics';
import { toast } from 'react-toastify';
import { useContext, useEffect } from 'react';
import UserContext from '../../../../contexts/UserContext/UserContext';
import { useNavigate } from 'react-router-dom';

const LoginMicrosoft = () => {

  const navigate = useNavigate();

  const { instance } = useMsal();
  const {userData, setUserData} = useContext(UserContext);

  const handleRedirect = () => {
    instance.loginPopup(loginRequest)
      .then(response => {
        const account = response.account;
        const userInfo = {
          username: account.name,
          email: account.username,
          token: account.idToken
        };
        setUserData(userInfo);
        toast.success('Login bem-sucedido!');
        navigate('/dashboard');
      })
      .catch(error => {
        toast.error('Algo deu errado com a autenticação Microsoft.');
        console.error(error);
      });
  };
  
  return (
    <FlexContainer style={{width: '100%'}}>
      <UnauthenticatedTemplate>
        <Button darkMode={true} width='90%' text='Microsoft Login' onClick={handleRedirect}/>
      </UnauthenticatedTemplate>
    </FlexContainer>
  )
}

export default LoginMicrosoft;
