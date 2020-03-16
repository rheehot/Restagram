import React from 'react';
import styled from 'styled-components';
import LayoutWrapper from '@styles/layout';
import variables from '@styles/variables';
import zIndexes from '@styles/zIndexes';
import LogoText from './LogoText';

const Header = styled.header`
  position: fixed;
  z-index: ${zIndexes.mobileFixed};
  left: 0;
  top: 0;
  width: 100%;
  height: ${variables.mobile.headerHeight};
  line-height: ${variables.mobile.headerHeight};
  text-align: center;
  background-color: #ffffff;
  border-bottom: 1px solid #bbbbbb;
`;

const HeaderMobile = () => {
  return (
    <Header>
      <LayoutWrapper>
        <LogoText size="1.7rem" />
      </LayoutWrapper>
    </Header>
  );
};

export default HeaderMobile;
