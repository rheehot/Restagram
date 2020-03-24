import React from 'react';
import LayoutWrapper from '@/styles/layout';
import AuthInput from '@/components/Shared/AuthInput';
import * as S from './SignUpForm.style';

const SignUpForm = () => {
  return (
    <section>
      <LayoutWrapper>
        <S.Form>
          <AuthInput type="text" placeholder="아이디" />
          <AuthInput type="password" placeholder="비밀번호" />
          <AuthInput type="text" placeholder="닉네임" />
          <S.SignUpButton>회원가입</S.SignUpButton>
        </S.Form>
      </LayoutWrapper>
    </section>
  );
};

export default SignUpForm;
