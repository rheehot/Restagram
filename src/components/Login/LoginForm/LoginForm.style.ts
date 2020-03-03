import styled from 'styled-components';
import { authFormStyle, centerStyle } from '@styles/variables';

const LoginButton = styled.button`
  ${authFormStyle};
  background-color: #ffb6b9;
  font-size: 1.3rem;
  color: white;
`;

const Form = styled.form`
  ${centerStyle};
  flex-direction: column;
`;

export { Form, LoginButton };
