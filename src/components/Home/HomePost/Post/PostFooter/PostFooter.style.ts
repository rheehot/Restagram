import styled from 'styled-components';
import { FaHeart, FaRegBookmark } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';

const PostFooter = styled.div`
  padding: 0.5rem 1rem;
`;

const PostInteraction = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const PostInteractionMain = styled.div`
  display: flex;
`;

const PostHeartIcon = styled(FaHeart)`
  color: red;
  margin-right: 0.4rem;
`;

const PostCommentIcon = styled(FiMessageCircle)`
  color: black;
`;

const PostBookmarkIcon = styled(FaRegBookmark)`
  color: black;
`;

const PostLikeMessage = styled.p`
  margin-bottom: 1rem;
`;

const PostIntroMessage = styled.p`
  span {
    font-weight: bold;
    margin-right: 0.5rem;
  }
  margin-bottom: 1rem;
`;

const PostMoreCommentMessage = styled.p`
  color: #bbbbbb;
  margin-bottom: 0.5rem;
`;

const PostCommentMessage = styled.p`
  span {
    font-weight: bold;
    margin-right: 0.5rem;
  }
  margin-bottom: 1rem;
`;

const PostTime = styled.span`
  color: #bbbbbb;
`;

export {
  PostFooter,
  PostInteraction,
  PostInteractionMain,
  PostHeartIcon,
  PostCommentIcon,
  PostBookmarkIcon,
  PostLikeMessage,
  PostIntroMessage,
  PostMoreCommentMessage,
  PostCommentMessage,
  PostTime,
};
