import React from 'react';
import profile from '@images/profile.jpg';
import dots from '@images/dots.png';
import * as S from './PostHeader.style';

const PostHeader = () => {
  return (
    <S.PostHeader>
      <S.PostHeaderMain>
        <S.PostProfile src={profile} alt="프로필사진" />
        <S.PostName>renabaebae</S.PostName>
        <S.PostFollow>팔로우</S.PostFollow>
      </S.PostHeaderMain>
      <S.PostDots src={dots} alt="더보기" />
    </S.PostHeader>
  );
};

export default PostHeader;
