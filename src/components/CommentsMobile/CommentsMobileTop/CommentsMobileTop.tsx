import React from 'react';
import shared from '@styles/shared';
import LayoutWrapper from '@styles/layout';
import profile from '@images/profile.jpg';
import * as S from './CommentsMobileTop.style';

const CommentsMobileTop = () => {
  return (
    <S.Container>
      <LayoutWrapper>
        <S.HeaderContainer>
          <S.HeaderBackButton />
          <S.HeaderTitle>댓글</S.HeaderTitle>
        </S.HeaderContainer>
      </LayoutWrapper>
      <S.FormWrapper>
        <LayoutWrapper>
          <S.FormContainer>
            <shared.CircleImage src={profile} alt="프로필 사진" />
            <S.Form>
              <S.Input type="text" placeholder="댓글 달기..." />
              <S.Button>게시</S.Button>
            </S.Form>
          </S.FormContainer>
        </LayoutWrapper>
      </S.FormWrapper>
    </S.Container>
  );
};

export default CommentsMobileTop;
