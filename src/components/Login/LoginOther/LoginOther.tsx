import React from 'react';
import { Link } from 'react-router-dom';
import LayoutWrapper from '@styles/layout';
import AuthFacebook from '@components/Shared/AuthFacebook';
import LocationDisplay from '@utils/LocationDisplay';
import * as S from './LoginOther.style';

const LoginOther = () => {
  return (
    <>
      <section>
        <LayoutWrapper>
          <div>
            <S.NoAccount>
              계정이 없으신가요?
              <Link data-testid="signup-link" to="/signup">
                <S.SignUpSpan>회원가입</S.SignUpSpan>
              </Link>
            </S.NoAccount>
            <AuthFacebook />
          </div>
        </LayoutWrapper>
      </section>
      <LocationDisplay />
    </>
  );
};

export default LoginOther;
