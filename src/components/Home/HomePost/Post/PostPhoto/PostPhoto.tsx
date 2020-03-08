import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import post from '@images/post.jpg';
import * as S from './PostPhoto.style';

const PostPhoto = () => {
  const settings = {
    dots: true,
  };

  return (
    <S.PostSlider {...settings}>
      <div>
        <S.PostImg src={post} alt="포스팅사진" />
      </div>
      <div>
        <S.PostImg src={post} alt="포스팅사진" />
      </div>
      <div>
        <S.PostImg src={post} alt="포스팅사진" />
      </div>
    </S.PostSlider>
  );
};

export default PostPhoto;
