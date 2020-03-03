import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from '@utils/renderWithRouter';
import { LoginOther } from '../index';

describe('Login 컴포넌트 테스트', () => {
  test('회원가입 라우팅 정상 동작해야 함', () => {
    const { getByTestId } = renderWithRouter(<LoginOther />);
    const signUpLink = getByTestId('signup-link');
    fireEvent.click(signUpLink);
    expect(getByTestId('location-display')).toHaveTextContent('/signup');
  });
});
