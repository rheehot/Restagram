import React from 'react';
import styled from 'styled-components';

const StyledLogoText = styled.p`
  font-family: 'Dancing Script';
  font-size: ${({ size }: { size?: string }) => size};
  font-weight: bold;
`;

const LogoText = ({ size }: { size?: string }) => (
  <StyledLogoText size={size}>Instagram</StyledLogoText>
);

export default LogoText;
