import React from 'react';
import {
  CommentsMobileTop,
  CommentsMobileAuthor,
  CommentsMobileContent,
} from '@components/CommentsMobile/index';
import { ICommentsState } from '@components/CommentsMobile/types';

const CommentsMobile = () => {
  const commentState: ICommentsState = {
    authorId: 'baeharam',
    authorProfile: 'https://bit.ly/39WMuWx',
    content: '포스트 작성자 컨텐츠',
    time: 3,
    comments: [
      {
        id: 1,
        authorId: 'baeharam',
        authorProfile: 'https://bit.ly/39WMuWx',
        content: '댓글컨텐츠',
        time: 3,
        likes: 3,
        isILike: false,
        replies: 3,
      },
    ],
  };

  return (
    <>
      <CommentsMobileTop />
      <section>
        <CommentsMobileAuthor commentState={commentState} />
        <CommentsMobileContent commentState={commentState} />
      </section>
    </>
  );
};

export default CommentsMobile;
