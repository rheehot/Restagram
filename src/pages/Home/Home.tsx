import React from 'react';
import { useMediaQuery } from 'beautiful-react-hooks';
import device from '@styles/device';
import PageTemplate from '@components/Shared/PageTemplate';
import { HomePost } from '@components/Home/index';
import HeaderLaptop from '@components/Shared/HeaderLaptop';
import HeaderMobile from '@components/Shared/HeaderMobile';

const Home = () => {
  const isLaptop = useMediaQuery(device.Laptops);

  return (
    <PageTemplate
      top={isLaptop ? <HeaderLaptop /> : <HeaderMobile />}
      bottom={isLaptop ? null : <HeaderMobile />}
    >
      <HomePost />
    </PageTemplate>
  );
};

export default Home;
