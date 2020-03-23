import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import shared from '@/styles/shared';

const StyledAuthInput = styled.input`
  ${shared.authFormStyle};
  border: 1px solid ${oc.gray[4]};
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
