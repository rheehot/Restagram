import React from 'react';
import LayoutWrapper from '@/styles/layout';
import { IPostState } from '@/components/Home/types';
import { PostHeader, PostFooter, PostPhoto } from './Post/index';
import Container from './HomePost.style';

const HomePost = () => {
  // useEffect로 자신 + 친구들의 최신 시간 순서로 포스트 가져옴
  const posts: IPostState[] = [
    {
      id: 1,
      authorId: 'baeharam',
      authorProfile:
        'https://images.unsplash.com/photo-1584258299720-e62c73cb10d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      isILike: false,
      isIFollow: false,
      images: [
        'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/84372598_149167676141010_6335606023263936465_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=RlfSzhk0TpEAX8Zk8Jp&oh=a4598e7bcc38f56cb4b646bfaac8b92a&oe=5EA22FEB',
        'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/84372598_149167676141010_6335606023263936465_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=RlfSzhk0TpEAX8Zk8Jp&oh=a4598e7bcc38f56cb4b646bfaac8b92a&oe=5EA22FEB',
      ],
      content: '포스트 컨텐츠',
      time: 3,
      numOfLikes: 3,
      numOfComments: 3,
      recentComments: [
        {
          id: 1,
          author: '댓글작성자',
          content: '댓글내용',
        },
      ],
    },
  ];

  return (
    <section>
      <LayoutWrapper>
        {posts.map(post => (
          <Container key={post.id}>
            <PostHeader post={post} />
            <PostPhoto post={post} />
            <PostFooter post={post} />
          </Container>
        ))}
      </LayoutWrapper>
    </section>
  );
};

export default HomePost;
