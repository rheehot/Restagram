import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ICommentsState } from '@components/CommentsMobile/types';
import * as S from './CommentsLaptopPhoto.style';

const CommentsLaptopPhoto = ({
  commentState,
}: {
  commentState: ICommentsState;
}) => {
  const settings = {
    dots: true,
  };

  return (
    <S.PostSlider {...settings}>
      {commentState.images.map(image => (
        <div key={image}>
          <S.PostImg src={image} alt="포스팅 사진" />
        </div>
      ))}
    </S.PostSlider>
  );
};

export default CommentsLaptopPhoto;
