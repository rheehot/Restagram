import styled from 'styled-components';
import { device } from 'styles/variables';

const LayoutWrapper = styled.div`
  width: 90vw;

  @media ${device.TabletPortrait} {
    width: 1200px;
  }
`;

export default LayoutWrapper;
