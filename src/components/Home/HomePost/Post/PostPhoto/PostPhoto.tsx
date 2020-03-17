import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IPostState } from '@components/Home/types';
import * as S from './PostPhoto.style';

const PostPhoto = ({ post }: { post: IPostState }) => {
  const settings = {
    dots: true,
  };

  return (
    <S.PostSlider {...settings}>
      {post.images.map(image => (
        <div key={image}>
          <S.PostImg src={image} alt="포스팅 사진" />
        </div>
      ))}
    </S.PostSlider>
  );
};

export default PostPhoto;
