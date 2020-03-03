import styled from 'styled-components';
import { authFormStyle, centerStyle } from '@styles/variables';

const Form = styled.form`
  ${centerStyle};
  flex-direction: column;
`;

const SignUpButton = styled.button`
  ${authFormStyle};
  background-color: black;
  color: white;
  font-size: 1.3rem;
`;

export { Form, SignUpButton };
