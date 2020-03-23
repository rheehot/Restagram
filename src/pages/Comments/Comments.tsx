import React from 'react';
import NavTemplate from '@/components/Shared/NavTemplate';
import CommentsMobile from './CommentsMobile';
import Main from './Comments.style';

const Comments = () => {
  return (
    <NavTemplate>
      <Main>
        <CommentsMobile />
      </Main>
    </NavTemplate>
  );
};

export default Comments;
