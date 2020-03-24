import React from 'react';
import LogoText from '@/components/Shared/LogoText';
import LogoIcon from '@/components/Shared/LogoIcon';
import LayoutWrapper from '@/styles/layout';
import Container from './LoginIntro.style';

const LoginIntro = () => {
  return (
    <section>
      <LayoutWrapper>
        <Container>
          <LogoIcon size="3rem" />
          <LogoText size="3rem" />
        </Container>
      </LayoutWrapper>
    </section>
  );
};

export default LoginIntro;
