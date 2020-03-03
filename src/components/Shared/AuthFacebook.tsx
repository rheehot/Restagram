import React from 'react';
import styled from 'styled-components';
import { FaFacebookSquare } from 'react-icons/fa';
import { authFormStyle, authFormWidth, device } from '@styles/variables';

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
    border-top: 1px solid #bbb;
  }

  &::after {
    content: '또는';
    padding: 0 1rem;
    position: relative;
    color: #bbb;
    background-color: #fff;
  }

  @media ${device.TabletPortrait} {
    width: ${authFormWidth};
  }
`;

const FacebookButton = styled.button`
  ${authFormStyle};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #11589a;
  font-size: 1.3rem;
  color: #fff;
  margin: 0 auto;
`;

const FacebookIcon = styled(FaFacebookSquare)`
  color: #fff;
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
