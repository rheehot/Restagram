import styled, { css } from 'styled-components';

// Color

export const mainBlue = '#3897F0';
export const mainGrey = '#EFEFEF';

// z-index

export const mobileFixedZindex = 100;

// Media query breakpoints

const size = {
  MobileLandscape: '480px',
  TabletPortrait: '768px',
  TabletLandscape: '992px',
  Laptops: '1200px',
};

export const device = {
  MobileLandscape: `(min-width: ${size.MobileLandscape})`,
  TabletPortrait: `(min-width: ${size.TabletPortrait})`,
  TabletLandscape: `(min-width: ${size.TabletLandscape})`,
  Laptops: `(min-width: ${size.Laptops})`,
};

// Related to components

const authFormHeight = '42px';
export const authFormWidth = '350px';

export const authFormStyle = css`
  display: block;
  height: ${authFormHeight};
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  border-radius: 3px;

  @media ${device.TabletPortrait} {
    width: ${authFormWidth};
  }
`;

export const centerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const mobileHeaderHeight = '64px';
export const mobileNavHeight = '52px';

export const CircleImage = styled.img`
  width: ${({ profileSize = '36px' }: { profileSize?: string }) => profileSize};
  height: ${({ profileSize = '36px' }: { profileSize?: string }) =>
    profileSize};
  border-radius: 50%;
`;
