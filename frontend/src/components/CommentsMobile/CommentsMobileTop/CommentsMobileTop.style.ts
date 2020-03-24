import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import variables from '@/styles/variables';
import palette from '@/styles/palette';
import zIndexes from '@/styles/zIndexes';
import oc from 'open-color';

const Container = styled.div`
  position: fixed;
  z-index: ${zIndexes.commentsMobileFixed};
  left: 0;
  top: 0;
  width: 100%;
`;

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  height: ${variables.comments.headerHeight};
  text-align: center;
`;

const HeaderBackButton = styled(IoIosArrowBack)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
`;

const HeaderTitle = styled.h1`
  font-size: 1.3rem;
  flex: 1;
`;

const FormWrapper = styled.div`
  background-color: ${palette.mainGrey};
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  height: ${variables.comments.formHeight};
`;

const Form = styled.form`
  flex: 1;
  display: flex;
  height: 65%;
  align-items: center;
  border: 1px solid ${oc.gray[4]};
  border-radius: 30px;
  margin-left: 0.7rem;
  background-color: white;
  padding: 0 1rem;
`;

const Input = styled.input`
  position: relative;
  flex: 1;
  border: none;
  background-color: transparent;
  box-sizing: border-box;
  &::placeholder {
    color: ${oc.gray[6]};
    font-size: 0.8em;
  }
`;

const Button = styled.button`
  color: ${palette.mainBlue};
  background-color: transparent;
  white-space: nowrap;
`;

export {
  Container,
  HeaderContainer,
  HeaderBackButton,
  HeaderTitle,
  FormWrapper,
  FormContainer,
  Form,
  Input,
  Button,
};
