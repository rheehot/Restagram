import React from 'react';
import { LoginIntro, LoginForm, LoginOther } from '@/components/Login/index';
import Container from './Login.style';

const Login = () => {
  return (
    <Container>
      <LoginIntro />
      <LoginForm />
      <LoginOther />
    </Container>
  );
};

export default Login;
