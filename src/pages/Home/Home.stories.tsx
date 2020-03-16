import React from 'react';
import Home from './Home';

export default {
  title: 'pages / Home',
  component: Home,
};

export const normal = () => <Home />;
normal.story = {
  name: '홈 기본 상태',
};
