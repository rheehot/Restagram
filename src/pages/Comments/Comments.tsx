import React from 'react';
import { useMediaQuery } from 'beautiful-react-hooks';
import device from '@/styles/device';
import CommentsMobile from './CommentsMobile';
import CommentsLaptop from './CommentsLaptop';

const Comments = () => {
  const isLaptop = useMediaQuery(device.Laptops);

  return isLaptop ? <CommentsLaptop /> : <CommentsMobile />;
};

export default Comments;
