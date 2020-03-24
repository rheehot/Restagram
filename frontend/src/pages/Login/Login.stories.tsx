import React from 'react';
import Login from './Login';

export default {
  title: 'pages / Login',
  component: Login,
};

export const normal = () => <Login />;
normal.story = {
  name: '로그인 기본 상태',
};
