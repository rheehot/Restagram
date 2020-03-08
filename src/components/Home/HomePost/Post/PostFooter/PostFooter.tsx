import React from 'react';
import * as S from './PostFooter.style';

const PostFooter = () => {
  return (
    <S.PostFooter>
      <S.PostInteraction>
        <S.PostInteractionMain>
          <S.PostHeartIcon />
          <S.PostCommentIcon />
        </S.PostInteractionMain>
        <S.PostBookmarkIcon />
      </S.PostInteraction>
      <S.PostLikeMessage>배하람님 외 19억명이 좋아합니다.</S.PostLikeMessage>
      <S.PostIntroMessage>
        <span>renabaebae</span>
        내가 바로 세젤예
      </S.PostIntroMessage>
      <S.PostMoreCommentMessage>댓글 5개 모두 보기</S.PostMoreCommentMessage>
      <S.PostCommentMessage>
        <span>baeharam</span>
        너무 예뻐용
      </S.PostCommentMessage>
      <S.PostTime>3일전</S.PostTime>
    </S.PostFooter>
  );
};

export default PostFooter;
