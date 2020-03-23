import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { IoMdHeartEmpty } from 'react-icons/io';
import shared from '@/styles/shared';
import { ICommentState } from '@/components/CommentsMobile/types';

const Container = styled.div`
  display: flex;
`;

const Profile = styled(shared.CircleImage)`
  margin-right: 1rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: ${oc.gray[5]};
`;

const Name = styled.h2`
  font-weight: bold;
  margin-right: 0.7rem;
  color: black;
`;

const Content = styled.span`
  color: black;
`;

const Day = styled.span`
  margin-right: 1rem;
`;

const SmallDivider = styled.div`
  height: 1px;
  background-color: ${oc.gray[5]};
  width: 40px;
  margin-right: 0.7rem;
`;

const LikeButton = styled(IoMdHeartEmpty)`
  font-size: 1.3rem;
  margin-left: auto;
`;

const Comment = ({ comment }: { comment: ICommentState }) => {
  return (
    <Container>
      <Profile src={comment.authorProfile} alt="프로필 사진" />
      <div>
        <Row>
          <Name>{comment.authorId}</Name>
          <Content>{comment.content}</Content>
        </Row>
        <Row>
          <Day>{comment.time}일</Day>
          <span>답글달기</span>
        </Row>
        {comment.replies && (
          <Row>
            <SmallDivider />
            <span>답글보기(3개)</span>
          </Row>
        )}
      </div>
      <LikeButton />
    </Container>
  );
};

export default Comment;
