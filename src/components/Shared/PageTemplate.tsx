import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import device from '@/styles/device';
import variables from '@/styles/variables';
import HeaderMobile from '@/components/Shared/HeaderMobile';
import HeaderLaptop from '@/components/Shared/HeaderLaptop';
import NavMobile from '@/components/Shared/NavMobile';

const profile = 'https://bit.ly/39WMuWx';

const Main = styled.main`
  padding-top: calc(${variables.mobile.headerHeight} + 1rem);
  padding-bottom: calc(${variables.mobile.navHeight} + 1rem);
`;

const PageTemplate = ({ children }: { children: React.ReactNode }) => {
  const isLaptop = useMediaQuery({ query: device.Laptops });

  return (
    <>
      {isLaptop ? <HeaderLaptop /> : <HeaderMobile />}
      <Main>{children}</Main>
      {!isLaptop && <NavMobile path={profile} />}
    </>
  );
};

export default PageTemplate;
