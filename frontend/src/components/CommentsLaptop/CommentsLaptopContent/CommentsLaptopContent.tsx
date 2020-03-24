import React from 'react';
import { ICommentsState } from '@/components/CommentsMobile/types';
import * as S from './CommentsLaptopContent.style';

const CommentsLaptopContent = ({
  commentState,
}: {
  commentState: ICommentsState;
}) => {
  return (
    <S.Container>
      <S.Author>
        <S.Profile src={commentState.authorProfile} alt="프로필 사진" />
        <S.Name>{commentState.authorId}</S.Name>
        <S.Follow>팔로잉</S.Follow>
      </S.Author>
      <S.Divider />
      <S.Intro>
        <S.Profile src={commentState.authorProfile} alt="프로필 사진" />
        <div>
          <S.Content>
            <S.Name>{commentState.authorId}</S.Name>
            <p>{commentState.content}</p>
          </S.Content>
          <S.Time>{commentState.time}시간</S.Time>
        </div>
      </S.Intro>
    </S.Container>
  );
};

export default CommentsLaptopContent;
