import React from 'react';
import styled from 'styled-components';
import variables from '@/styles/variables';
import HeaderLaptop from './HeaderLaptop';

interface Props {
  children: React.ReactNode;
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
  padding-top: calc(${variables.laptop.headerHeight} + 1rem);
  padding-bottom: ${variables.laptop.bottomHeight};
`;

const PageTemplateLaptop = ({ children }: Props) => {
  return (
    <>
      <HeaderLaptop />
      <Main>{children}</Main>
    </>
  );
};

export default PageTemplateLaptop;
