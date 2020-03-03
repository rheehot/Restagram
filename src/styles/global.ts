import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
  *, *:before, *:after {
    outline: none;
    user-select: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    font-family: inherit;
    border: none;
  }
`;

export default GlobalStyle;
