import styled from 'styled-components';
import { device } from 'styles/variables';

const LayoutWrapper = styled.div`
  margin: 0 auto;
  width: 90vw;

  @media ${device.TabletPortrait} {
    width: 1200px;
  }
`;

export default LayoutWrapper;
