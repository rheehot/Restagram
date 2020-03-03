import React from 'react';
import LayoutWrapper from '@styles/layout';
import * as S from './LoginOther.style';

const LoginOther = () => {
  return (
    <section>
      <LayoutWrapper>
        <div>
          <S.NoAccount>
            계정이 없으신가요? <S.SignUpSpan>회원가입</S.SignUpSpan>
          </S.NoAccount>
          <S.Divider />
          <S.FacebookButton>
            <S.FacebookIcon />
            페이스북으로 로그인
          </S.FacebookButton>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default LoginOther;
