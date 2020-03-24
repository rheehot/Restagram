import React from 'react';
import styled from 'styled-components';
import variables from '@/styles/variables';
import HeaderMobile from './HeaderMobile';
import Navigation from './Navigation';

interface Props {
  header?: React.ReactNode;
  children: React.ReactNode;
}

const Main = styled.main`
  box-sizing: border-box;
  padding-top: calc(${variables.mobile.headerHeight} + 1rem);
  padding-bottom: calc(${variables.mobile.navHeight} + 1rem);
  min-height: 100vh;
`;

const PageTemplateMobile = ({ header, children }: Props) => {
  return (
    <>
      {header || <HeaderMobile />}
      <Main>{children}</Main>
      <Navigation />
    </>
  );
};

export default PageTemplateMobile;
