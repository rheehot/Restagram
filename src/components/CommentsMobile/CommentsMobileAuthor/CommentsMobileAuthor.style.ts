import styled from 'styled-components';
import oc from 'open-color';
import shared from '@styles/shared';

const Wrapper = styled.div`
  padding: 1.7rem 0;
  border-bottom: 1px solid ${oc.gray[4]};
`;

const Container = styled.div`
  display: flex;
`;

const Profile = styled(shared.CircleImage)`
  margin-right: 1rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  margin-bottom: 0.7rem;
`;

const Name = styled.h2`
  font-weight: bold;
  margin-right: 0.7rem;
`;

const Day = styled.span`
  color: ${oc.gray[5]};
`;

export { Wrapper, Container, Profile, ContentContainer, Content, Name, Day };
