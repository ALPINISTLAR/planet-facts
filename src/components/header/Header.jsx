import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Navigation from './Navigation';
import { HamburgerButton } from './MobileNavigation';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem 0 3.2rem;
  height: 8.5rem;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.2);
  width: ${({ theme }) => theme.screenSize.desktop};

  @media screen and (max-width: 1440px) {
    width: 100vw;
  }
  @media screen and (max-width: 1165px) {
    flex-direction: column;
    height: 15.9rem;
    justify-content: center;
    gap: 0.3rem;
  }

  @media screen and (max-width: 720px) {
    flex-direction: row;
    height: 6.8rem;
    justify-content: space-between;
    padding: 0 2.4rem 0 2.4rem;
  }
`;

const Header = ({ mobileMenu, mobileMenuHandler }) => {
  return (
    <HeaderContainer>
      <Logo />
      <Navigation />
      <HamburgerButton
        mobileMenuHandler={mobileMenuHandler}
        mobileMenu={mobileMenu}
      />
    </HeaderContainer>
  );
};

export default Header;