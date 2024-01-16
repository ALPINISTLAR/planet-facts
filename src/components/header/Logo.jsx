import React from 'react';
import styled from 'styled-components';

const HeaderLogo = styled.a`
  font-size: 2.8rem;
  font-family: 'Antonio', sans-serif;
  letter-spacing: -0.105rem;
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
`;

const Logo = () => {
  return (
    <HeaderLogo href='/' aria-label='Planets Facts Site - Home'>
      The planets
    </HeaderLogo>
  );
};

export default Logo;