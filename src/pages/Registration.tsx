import React, { useState } from 'react';
import { Button, styled } from '@mui/material';
import SignIn from 'components/SignIn';
import CreateAccount from 'components/CreateAccount';

const StyledButtonWrapper = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  font-size: 25px;
  font-weight: bold;
`;

const StyledRegWrapper = styled('div')``;

const Registration = () => {
  const [registration, setRegistration] = useState<boolean>(false);
  const [signIn, setSignIn] = useState<boolean>(false);

  const onSignInClick = () => {
    setSignIn(!signIn);
    setRegistration(false);
  };

  const onRegistrationClick = () => {
    setRegistration(!registration);
    setSignIn(false);
  };

  return (
    <StyledRegWrapper>
      <StyledButtonWrapper>
        <Button variant={'text'} color={signIn ? 'secondary' : 'primary'} onClick={onSignInClick}>
          Вход
        </Button>

        <Button variant={'text'} color={registration ? 'secondary' : 'primary'} onClick={onRegistrationClick}>
          Регистрация
        </Button>
      </StyledButtonWrapper>
      {signIn ? <SignIn /> : null}
      {registration ? <CreateAccount /> : null}
    </StyledRegWrapper>
  );
};

export default Registration;
