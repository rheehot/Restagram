import React from 'react';
import LayoutWrapper from '@styles/layout';
import { PostHeader, PostFooter, PostPhoto } from './Post/index';
import Post from './HomePost.style';

const HomePost = () => {
  return (
    <section>
      <LayoutWrapper>
        <Post>
          <PostHeader />
          <PostPhoto />
          <PostFooter />
        </Post>
      </LayoutWrapper>
    </section>
  );
};

export default HomePost;
