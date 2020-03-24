import React from 'react';
import styled from 'styled-components';
import variables from '@/styles/variables';

const Main = styled.main`
  padding-top: calc(${variables.mobile.headerHeight} + 1rem);
  padding-bottom: calc(${variables.mobile.navHeight} + 1rem);
`;

interface IPageTemplateProps {
  children: React.ReactNode;
  top: React.ReactNode | null;
  bottom: React.ReactNode | null;
}

const PageTemplate = ({
  children,
  top = null,
  bottom = null,
}: IPageTemplateProps) => {
  return (
    <>
      {top}
      <Main>{children}</Main>
      {bottom}
    </>
  );
};

export default PageTemplate;
