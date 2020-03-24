import styled from 'styled-components';
import Slider from 'react-slick';

const PostSlider = styled(Slider)`
  width: 55%;
  margin: 0 1rem 1rem 0;
`;

const PostImg = styled.img`
  max-width: 100%;
`;

export { PostSlider, PostImg };
