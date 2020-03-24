import styled from 'styled-components';
import shared from '@/styles/shared';

const Form = styled.form`
  ${shared.centerStyle};
  flex-direction: column;
`;

const SignUpButton = styled.button`
  ${shared.authFormStyle};
  background-color: black;
  color: white;
  font-size: 1.3rem;
`;

export { Form, SignUpButton };
