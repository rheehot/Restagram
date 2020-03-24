import React, { ComponentType } from 'react';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory, MemoryHistory } from 'history';

interface IWrapperProps {
  children?: ComponentType;
}

export default function renderWithRouter(
  ui: React.ReactElement,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  }: { route?: string; history?: MemoryHistory } = {},
) {
  const Wrapper: React.FC<IWrapperProps> = ({ children }: IWrapperProps) => (
    <Router history={history}>{children}</Router>
  );
  return {
    ...render(ui, { wrapper: Wrapper }),
    history,
  };
}
