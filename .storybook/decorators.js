import React from 'react';
import GlobalStyle from '../src/styles/global';
import { StoryFn } from '@storybook/addons';

const withGlobalStyle: React.FC<StoryFn> = (storyFn: StoryFn) => (
  <>
    <GlobalStyle />
    {storyFn()}
  </>
);

export default withGlobalStyle;
