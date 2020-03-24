import React from 'react';
import { addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import withGlobalStyle from './decorators';

addDecorator(withGlobalStyle);
addDecorator(StoryRouter());
