import React from 'react';
import styled from 'styled-components';
import { authFormStyle } from '@styles/variables';

const StyledAuthInput = styled.input`
  ${authFormStyle};
  border: 1px solid #bbb;
  margin-bottom: 0.7rem;
`;

const AuthInput = ({ placeholder }: { placeholder: string }) => (
  <StyledAuthInput placeholder={placeholder} />
);

export default AuthInput;
