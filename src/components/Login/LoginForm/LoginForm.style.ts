import styled from 'styled-components';
import shared from '@styles/shared';

const LoginButton = styled.button`
  ${shared.authFormStyle};
  background-color: #ffb6b9;
  font-size: 1.3rem;
  color: white;
`;

const Form = styled.form`
  ${shared.centerStyle};
  flex-direction: column;
`;

export { Form, LoginButton };
