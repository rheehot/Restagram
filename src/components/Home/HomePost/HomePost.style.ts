import styled from 'styled-components';
import { mainGrey, device } from '@styles/variables';

const Post = styled.div`
  border: 1px solid ${mainGrey};
  margin: 0 auto;

  @media ${device.TabletPortrait} {
    width: 500px;
  }
`;

export default Post;
