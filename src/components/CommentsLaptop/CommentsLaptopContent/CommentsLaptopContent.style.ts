import styled from 'styled-components';
import oc from 'open-color';
import shared from '@styles/shared';

const Author = styled.div`
  display: flex;
`;

const Profile = styled(shared.CircleImage)`
  margin-right: 0.7rem;
`;

const Intro = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  display: flex;
`;

const Name = styled.strong`
  font-weight: bold;
  margin-right: 0.7rem;
`;

const Divider = styled.div`
  height: 1px;
  background-color: ${oc.gray[4]};
  margin: 1rem 0;
`;

export { Author, Profile, Intro, Content, Name, Divider };
