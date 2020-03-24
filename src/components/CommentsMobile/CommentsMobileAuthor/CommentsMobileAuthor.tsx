import React from 'react';
import LayoutWrapper from '@/styles/layout';
import { ICommentsState } from '../types';
import * as S from './CommentsMobileAuthor.style';

const CommentsMobileAuthor = ({
  commentState,
}: {
  commentState: ICommentsState;
}) => {
  return (
    <S.Wrapper>
      <LayoutWrapper>
        <S.Container>
          <S.Profile src={commentState.authorProfile} alt="프로필 사진" />
          <S.ContentContainer>
            <S.Content>
              <S.Name>{commentState.authorId}</S.Name>
              <p>{commentState.content}</p>
            </S.Content>
            <S.Day>{commentState.time}일</S.Day>
          </S.ContentContainer>
        </S.Container>
      </LayoutWrapper>
    </S.Wrapper>
  );
};

export default CommentsMobileAuthor;
