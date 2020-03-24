import React from 'react';
import SignUp from './SignUp';

export default {
  title: 'pages / SignUp',
  component: SignUp,
};

export const normal = () => <SignUp />;
normal.story = {
  name: '회원가입 기본 상태',
};
