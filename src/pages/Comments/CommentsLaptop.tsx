import React from 'react';
import { ICommentsState } from '@/components/CommentsMobile/types';
import {
  CommentsLaptopContent,
  CommentsLaptopPhoto,
} from '@/components/CommentsLaptop/index';
import Container from './CommentsLaptop.style';
import PageTemplateLaptop from '@/components/Shared/PageTemplateLaptop';

const CommentsLaptop = () => {
  const commentState: ICommentsState = {
    authorId: 'baeharam',
    authorProfile: 'https://bit.ly/39WMuWx',
    content: '포스트 작성자 컨텐츠',
    time: 3,
    images: ['https://bit.ly/39WMuWx', 'https://bit.ly/39WMuWx'],
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
    <PageTemplateLaptop>
      <Container>
        <CommentsLaptopPhoto commentState={commentState} />
        <CommentsLaptopContent commentState={commentState} />
      </Container>
    </PageTemplateLaptop>
  );
};

export default CommentsLaptop;
