import styled from 'styled-components';
import variables from '@styles/variables';

const Main = styled.main`
  padding-top: calc(${variables.mobile.headerHeight} + 1rem);
  padding-bottom: calc(${variables.mobile.navHeight} + 1rem);
`;

export default Main;
