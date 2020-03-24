import styled from 'styled-components';
import Slider from 'react-slick';

const PostSlider = styled(Slider)`
  width: 55%;
  margin-bottom: 1rem;
`;

const PostImg = styled.img`
  max-width: 100%;
`;

export { PostSlider, PostImg };
