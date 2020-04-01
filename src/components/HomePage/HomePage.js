import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { toast } from 'react-toastify';
import { googleAuthKey } from '../../config.json';
import './HomePage.scss';

export default ({ history }) => {
  const success = data => {
    toast.success(`Hello ${data.profileObj.name}`);
    sessionStorage.setItem('auth', 'true');
    history.push('/users');
  };

  return (
    <div className="HomePage__Wrapper">
      <GoogleLogin
        clientId={googleAuthKey}
        buttonText="Login to Allenby Exchange"
        redirectUri="/users"
        onSuccess={success}
        onFailure={() => {
          toast.error('Could not login');
        }}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};
