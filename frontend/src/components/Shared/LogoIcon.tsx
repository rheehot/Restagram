import styled from 'styled-components';
import { FaInstagram } from 'react-icons/fa';

const LogoIcon = styled(FaInstagram)`
  font-size: ${({ size }: { size?: string }) => size};
`;

export default LogoIcon;
