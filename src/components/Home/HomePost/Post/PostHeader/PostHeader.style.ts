import styled from 'styled-components';
import shared from '@styles/shared';
import palette from '@styles/palette';

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${palette.mainGrey};
  padding: 0.7rem 1rem;
`;

const PostHeaderMain = styled.div`
  display: flex;
  align-items: center;
`;

const PostProfile = styled(shared.CircleImage)`
  margin-right: 1rem;
`;

const PostName = styled.h2`
  margin-right: 0.7rem;
`;

const PostFollow = styled.span`
  color: ${palette.mainBlue};
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
