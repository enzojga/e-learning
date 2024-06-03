import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { loginRequest } from '../../../../config/Auth.config';
import Button from '../../../common/Button/Button';
import { FlexContainer } from '../../../../styles/Generics/Generics';

const LoginMicrosoft = () => {

  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();

  const handleRedirect = () => {
    instance.loginRedirect({
      ...loginRequest,
      prompt: 'create'
    })
    .catch(error => console.log(error))
  }
  
  return (
    <FlexContainer style={{width: '100%'}}>
      <UnauthenticatedTemplate>
        <Button darkMode={true} width='90%' text='Microsoft Login' onClick={handleRedirect}/>
      </UnauthenticatedTemplate>
    </FlexContainer>
  )
}

export default LoginMicrosoft