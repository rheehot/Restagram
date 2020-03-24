import React from 'react';
import { IPostState, IShortComment } from '@/components/Home/types';
import * as S from './PostFooter.style';

const PostFooter = ({ post }: { post: IPostState }) => {
  return (
    <S.PostFooter>
      <S.PostInteraction>
        <S.PostInteractionMain>
          {post.isILike && <S.PostHeartIcon />}
          <S.PostCommentIcon />
        </S.PostInteractionMain>
        <S.PostBookmarkIcon />
      </S.PostInteraction>
      <S.PostLikeMessage>{post.numOfLikes}명이 좋아합니다.</S.PostLikeMessage>
      <S.PostIntroMessage>
        <span>{post.authorId}</span>
        {post.content}
      </S.PostIntroMessage>
      <S.PostMoreCommentMessage>
        댓글 {post.numOfComments}개 모두 보기
      </S.PostMoreCommentMessage>
      {post.recentComments.map((recentComment: IShortComment) => (
        <S.PostCommentMessage key={recentComment.id}>
          <span>{recentComment.author}</span>
          {recentComment.content}
        </S.PostCommentMessage>
      ))}
      <S.PostTime>{post.time}일전</S.PostTime>
    </S.PostFooter>
  );
};

export default PostFooter;
