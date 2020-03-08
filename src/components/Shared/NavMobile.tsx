import React from 'react';
import styled from 'styled-components';
import {
  IoMdHome,
  IoIosSearch,
  IoIosAddCircleOutline,
  IoIosHeartEmpty,
} from 'react-icons/io';
import {
  CircleImage,
  mobileNavHeight,
  mobileFixedZindex,
} from '@styles/variables';

const Nav = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: ${mobileFixedZindex};
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  font-size: 2rem;
  height: ${mobileNavHeight};
  border-top: 1px solid #bbbbbb;
`;

const NavMobile = ({ path }: { path: string }) => {
  return (
    <Nav>
      <IoMdHome />
      <IoIosSearch />
      <IoIosAddCircleOutline />
      <IoIosHeartEmpty />
      <CircleImage src={path} alt="프로필 사진" />
    </Nav>
  );
};

export default NavMobile;
