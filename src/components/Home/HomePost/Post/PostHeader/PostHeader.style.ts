import styled from 'styled-components';
import { mainGrey, mainBlue, CircleImage } from '@styles/variables';

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${mainGrey};
  padding: 0.7rem 1rem;
`;

const PostHeaderMain = styled.div`
  display: flex;
  align-items: center;
`;

const PostProfile = styled(CircleImage)`
  margin-right: 1rem;
`;

const PostName = styled.h2`
  margin-right: 0.7rem;
`;

const PostFollow = styled.span`
  color: ${mainBlue};
  margin-right: 1rem;
`;

const PostDots = styled.img`
  width: 30px;
`;

export {
  PostHeader,
  PostHeaderMain,
  PostProfile,
  PostName,
  PostFollow,
  PostDots,
};
