import React from 'react';
import styled from 'styled-components';
import { authFormStyle } from '@styles/variables';

const StyledAuthInput = styled.input`
  ${authFormStyle};
  border: 1px solid #bbb;
  margin-bottom: 0.7rem;
`;

interface IAuthInputProps {
  placeholder: string;
  type: string;
}

const AuthInput = ({ placeholder, type }: IAuthInputProps) => (
  <StyledAuthInput type={type} placeholder={placeholder} />
);

export default AuthInput;
