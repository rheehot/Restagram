import React from 'react';
import styled from 'styled-components';
import { IoMdHeartEmpty, IoIosSearch } from 'react-icons/io';
import { FaRegCompass } from 'react-icons/fa';
import oc from 'open-color';
import profile from '@images/profile.jpg';
import shared from '@styles/shared';
import LayoutWrapper from '@styles/layout';
import LogoIcon from './LogoIcon';
import LogoText from './LogoText';

const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid ${oc.gray[4]};
  padding: 0 1rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;

const StyledLogoIcon = styled(LogoIcon)`
  margin-right: 1rem;
`;

const Logo = styled.div`
  display: flex;
`;

const UL = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  width: 8rem;
`;

const Search = styled.div`
  display: flex;
  border: 1px solid ${oc.gray[4]};
  border-radius: 3px;
  padding: 0.5rem 0.7rem;
  background-color: ${oc.white[4]};
  width: 300px;
`;

const SearchIcon = styled(IoIosSearch)`
  font-size: 1.2rem;
  margin-right: 0.3rem;
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
`;

const HeaderLaptop = () => {
  return (
    <Header>
      <LayoutWrapper>
        <Container>
          <Logo>
            <StyledLogoIcon size="2rem" />
            <LogoText size="2rem" />
          </Logo>
          <Search>
            <SearchIcon />
            <SearchInput type="text" placeholder="검색" />
          </Search>
          <nav>
            <UL>
              <li>
                <IoMdHeartEmpty />
              </li>
              <li>
                <FaRegCompass />
              </li>
              <li>
                <shared.CircleImage
                  profileSize="2rem"
                  src={profile}
                  alt="프로필 사진"
                />
              </li>
            </UL>
          </nav>
        </Container>
      </LayoutWrapper>
    </Header>
  );
};

export default HeaderLaptop;
