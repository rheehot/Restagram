import React from 'react';
import LayoutWrapper from '@styles/layout';
import Comment from '@components/Shared/Comment';
import Wrapper from './CommentsMobileContent.style';
import { ICommentsState } from '../types';

const CommentsMobileContent = ({
  commentState,
}: {
  commentState: ICommentsState;
}) => {
  return (
    <Wrapper>
      <LayoutWrapper>
        {commentState.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </LayoutWrapper>
    </Wrapper>
  );
};

export default CommentsMobileContent;
