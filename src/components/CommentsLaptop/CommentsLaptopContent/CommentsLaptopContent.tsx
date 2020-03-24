import React from 'react';
import { ICommentsState } from '@components/CommentsMobile/types';
import * as S from './CommentsLaptopContent.style';

const CommentsLaptopContent = ({
  commentState,
}: {
  commentState: ICommentsState;
}) => {
  return (
    <>
      <S.Author>
        <S.Profile src={commentState.authorProfile} alt="프로필 사진" />
        <S.Name>{commentState.authorId}</S.Name>
        <span>팔로잉</span>
      </S.Author>
      <S.Divider />
      <S.Intro>
        <S.Profile src={commentState.authorProfile} alt="프로필 사진" />
        <div>
          <S.Content>
            <S.Name>{commentState.authorId}</S.Name>
            <p>{commentState.content}</p>
          </S.Content>
          <p>{commentState.time}시간</p>
        </div>
      </S.Intro>
    </>
  );
};

export default CommentsLaptopContent;
