import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { loginRequest } from '../../../../config/Auth.config';
import Button from '../../../common/Button/Button';

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
    <div>
      <AuthenticatedTemplate>
        <div>
          <h2>Welcome, {activeAccount?.name}</h2>
          <p>You are logged in with Microsoft.</p>
        </div>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Button darkMode={true} width='380px' text='Microsoft Login' onClick={handleRedirect}/>
      </UnauthenticatedTemplate>
    </div>
  )
}

export default LoginMicrosoft