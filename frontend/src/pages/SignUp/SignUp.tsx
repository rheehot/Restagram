import React from 'react';
import { SignUpIntro, SignUpForm, SignUpOther } from '@/components/SignUp/index';
import Container from './SignUp.style';

const SignUp = () => {
  return (
    <Container>
      <SignUpIntro />
      <SignUpForm />
      <SignUpOther />
    </Container>
  );
};

export default SignUp;
