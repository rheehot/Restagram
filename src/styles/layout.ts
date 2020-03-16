import styled from 'styled-components';
import device from '@styles/device';

const LayoutWrapper = styled.div`
  margin: 0 auto;
  width: 90vw;

  @media ${device.Laptops} {
    width: 1200px;
  }
`;

export default LayoutWrapper;
