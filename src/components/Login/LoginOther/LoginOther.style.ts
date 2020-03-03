import styled from 'styled-components';
import {
  mainBlue,
  authFormStyle,
  authFormWidth,
  device,
} from '@styles/variables';
import { FaFacebookSquare } from 'react-icons/fa';

const NoAccount = styled.p`
  padding: 2rem 0;
  text-align: center;
  font-weight: bold;
`;

const SignUpSpan = styled.span`
  color: ${mainBlue};
  margin-left: 0.7rem;
`;

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

export { NoAccount, SignUpSpan, Divider, FacebookButton, FacebookIcon };
