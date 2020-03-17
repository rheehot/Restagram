import React from 'react';
import { IPostState } from '@components/Home/types';
import dots from '@images/dots.png';
import * as S from './PostHeader.style';

const PostHeader = ({ post }: { post: IPostState }) => {
  return (
    <S.PostHeader>
      <S.PostHeaderMain>
        <S.PostProfile src={post.authorProfile} alt="프로필사진" />
        <S.PostName>{post.authorId}</S.PostName>
        <S.PostFollow>{post.isIFollow ? '팔로잉' : '팔로우'}</S.PostFollow>
      </S.PostHeaderMain>
      <S.PostDots src={dots} alt="더보기" />
    </S.PostHeader>
  );
};

export default PostHeader;
