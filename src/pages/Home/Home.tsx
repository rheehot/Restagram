import React from 'react';
import PageTemplate from '@components/Shared/PageTemplate';
import { HomePost } from '@components/Home/index';

const Home = () => {
  return (
    <PageTemplate>
      <HomePost />
    </PageTemplate>
  );
};

export default Home;
