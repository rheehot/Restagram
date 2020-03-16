import styled, { css } from 'styled-components';
import device from '@styles/device';
import variables from '@styles/variables';

export const authFormStyle = css`
  display: block;
  height: ${variables.auth.formHeight};
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  border-radius: 3px;

  @media ${device.TabletPortrait} {
    width: ${variables.auth.formWidth};
  }
`;

export const centerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CircleImage = styled.img`
  width: ${({ profileSize = '36px' }: { profileSize?: string }) => profileSize};
  height: ${({ profileSize = '36px' }: { profileSize?: string }) =>
    profileSize};
  border-radius: 50%;
`;

export default {
  authFormStyle,
  centerStyle,
  CircleImage,
};
