import React from 'react';
import { Link } from 'react-router-dom';
import LayoutWrapper from '@styles/layout';
import LogoText from '@components/Shared/LogoText';
import Container from './SignUpIntro.style';

const SignUpIntro = () => {
  return (
    <section>
      <LayoutWrapper>
        <Container>
          <Link to="/">
            <LogoText size="3rem" />
          </Link>
        </Container>
      </LayoutWrapper>
    </section>
  );
};

export default SignUpIntro;
