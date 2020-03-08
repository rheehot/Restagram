import React from 'react';
import HeaderMobile from '@components/Shared/HeaderMobile';
import { HomePost } from '@components/Home/index';
import NavMobile from '@components/Shared/NavMobile';
import profile from '@images/profile.jpg';
import Main from './Home.style';

const Home = () => {
  return (
    <>
      <HeaderMobile />
      <Main>
        <HomePost />
      </Main>
      <NavMobile path={profile} />
    </>
  );
};

export default Home;
