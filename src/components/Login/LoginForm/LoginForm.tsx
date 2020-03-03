import React from 'react';
import AuthInput from '@components/Shared/AuthInput';
import LayoutWrapper from 'styles/layout';
import * as S from './LoginForm.style';

const LoginForm = () => {
  return (
    <section>
      <LayoutWrapper>
        <S.Form method="POST">
          <AuthInput placeholder="아이디" />
          <AuthInput placeholder="비밀번호" />
          <S.LoginButton type="submit">로그인</S.LoginButton>
        </S.Form>
      </LayoutWrapper>
    </section>
  );
};

export default LoginForm;
