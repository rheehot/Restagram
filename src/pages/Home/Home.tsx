import React from 'react';
import { useMediaQuery } from 'react-responsive';
import HeaderMobile from '@components/Shared/HeaderMobile';
import HeaderLaptop from '@components/Shared/HeaderLaptop';
import { HomePost } from '@components/Home/index';
import NavMobile from '@components/Shared/NavMobile';
import profile from '@images/profile.jpg';
import device from '@styles/device';
import Main from './Home.style';

const Home = () => {
  const isLaptop = useMediaQuery({ query: device.Laptops });

  return (
    <>
      {isLaptop ? <HeaderLaptop /> : <HeaderMobile />}
      <Main>
        <HomePost />
      </Main>
      {!isLaptop && <NavMobile path={profile} />}
    </>
  );
};

export default Home;
