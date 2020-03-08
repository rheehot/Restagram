import styled from 'styled-components';
import { mobileHeaderHeight, mobileNavHeight } from '@styles/variables';

const Main = styled.main`
  padding-top: calc(${mobileHeaderHeight} + 1rem);
  padding-bottom: calc(${mobileNavHeight} + 1rem);
`;

export default Main;
