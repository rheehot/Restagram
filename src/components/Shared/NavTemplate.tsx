import React from 'react';
import { useMediaQuery } from 'react-responsive';
import device from '@styles/device';
import HeaderLaptop from '@components/Shared/HeaderLaptop';
import NavMobile from '@components/Shared/NavMobile';
import profile from '@images/profile.jpg';

const NavTemplate = ({ children }: { children: React.ReactNode }) => {
  const isLaptop = useMediaQuery({ query: device.Laptops });

  return (
    <>
      {isLaptop && <HeaderLaptop />}
      {children}
      {!isLaptop && <NavMobile path={profile} />}
    </>
  );
};

export default NavTemplate;
