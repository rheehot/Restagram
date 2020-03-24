import React from 'react';
import styled from 'styled-components';
import { FaFacebookSquare } from 'react-icons/fa';
import oc from 'open-color';
import variables from '@/styles/variables';
import shared from '@/styles/shared';
import device from '@/styles/device';
import palette from '@/styles/palette';

const Divider = styled.hr`
  position: relative;
  text-align: center;
  border: none;
  margin: 2rem auto;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    left: 0;
    top: 50%;
    border-top: 1px solid ${oc.gray[4]};
  }

  &::after {
    content: '또는';
    padding: 0 1rem;
    position: relative;
    color: ${oc.gray[4]};
    background-color: white;
  }

  @media ${device.TabletPortrait} {
    width: ${variables.auth.formWidth};
  }
`;

const FacebookButton = styled.button`
  ${shared.authFormStyle};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${palette.facebookBlue};
  font-size: 1.3rem;
  color: white;
  margin: 0 auto;
`;

const FacebookIcon = styled(FaFacebookSquare)`
  color: white;
  margin-right: 1rem;
  font-size: 1.5rem;
`;

const AuthFacebook = () => {
  return (
    <>
      <Divider />
      <FacebookButton>
        <FacebookIcon />
        페이스북으로 로그인
      </FacebookButton>
    </>
  );
};

export default AuthFacebook;
