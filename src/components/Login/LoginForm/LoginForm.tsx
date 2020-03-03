import React from 'react';
import AuthInput from '@components/Shared/AuthInput';
import LayoutWrapper from 'styles/layout';
import * as S from './LoginForm.style';

const LoginForm = () => {
  return (
    <section>
      <LayoutWrapper>
        <S.Form>
          <AuthInput type="text" placeholder="아이디" />
          <AuthInput type="password" placeholder="비밀번호" />
          <S.LoginButton type="submit">로그인</S.LoginButton>
        </S.Form>
      </LayoutWrapper>
    </section>
  );
};

export default LoginForm;
