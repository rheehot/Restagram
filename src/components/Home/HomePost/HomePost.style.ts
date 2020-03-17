import styled from 'styled-components';
import palette from '@styles/palette';
import device from '@styles/device';

const Container = styled.div`
  border: 1px solid ${palette.mainGrey};
  margin: 0 auto;

  @media ${device.TabletPortrait} {
    width: 500px;
  }
`;

export default Container;
