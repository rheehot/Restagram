import React from 'react';
import { useMediaQuery } from 'beautiful-react-hooks';
import device from '@/styles/device';
import PageTemplateLaptop from '@/components/Shared/PageTemplateLaptop';
import PageTemplateMobile from '@/components/Shared/PageTemplateMobile';
import { HomePost } from '@/components/Home/index';

const Home = () => {
  const isLaptop = useMediaQuery(device.Laptops);

  return (
    <>
      {isLaptop ? (
        <PageTemplateLaptop>{HomePost}</PageTemplateLaptop>
      ) : (
        <PageTemplateMobile>{HomePost}</PageTemplateMobile>
      )}
    </>
  );
};

export default Home;
