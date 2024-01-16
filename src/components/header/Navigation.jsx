import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
  @media screen and (max-width: 720px) {
    display: none;
  }
`;

const HeaderNavigation = styled.ul`
  display: flex;
  gap: 3.3rem;

  @media screen and (max-width: 1165px) {
    padding-left: 0;
  }
`;

const HeaderLi = styled.li`
  list-style: none;
  background-color: ${({ active }) =>
    active ? ({ theme }) => theme.colors.bloodMoon : 'none'};
`;

const HeaderAnchor = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  padding-top: 3.3rem;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-family: 'Spartan', sans-serif;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;

  @media screen and (max-width: 1165px) {
    &.active {
      border-top: none;
    }
  }
`;

const MercuryAnchor = styled(HeaderAnchor)`
  &:hover {
    border-top: 4px solid ${({ theme }) => theme.colors.cerulean};
  }

  &.active {
    border-top: 4px solid ${({ theme }) => theme.colors.cerulean};
  }

  @media screen and (max-width: 1165px) {
    &:hover {
      border-top: none;
    }

    &.active {
      border-top: none;
      border-bottom: 4px solid ${({ theme }) => theme.colors.cerulean};
    }
  }
`;

const VenusAnchor = styled(HeaderAnchor)`
  &:hover {
    border-top: 4px solid ${({ theme }) => theme.colors.tulipTree};
  }

  &.active {
    border-top: 4px solid ${({ theme }) => theme.colors.tulipTree};
  }

  @media screen and (max-width: 1165px) {
    &:hover {
      border-top: none;
    }

    &.active {
      border-top: none;
      border-bottom: 4px solid ${({ theme }) => theme.colors.tulipTree};
    }
  }
`;

const EarthAnchor = styled(HeaderAnchor)`
  &:hover {
    border-top: 4px solid ${({ theme }) => theme.colors.purple};
  }

  &.active {
    border-top: 4px solid ${({ theme }) => theme.colors.purple};
  }

  @media screen and (max-width: 1165px) {
    &:hover {
      border-top: none;
    }

    &.active {
      border-top: none;
      border-bottom: 4px solid ${({ theme }) => theme.colors.purple};
    }
  }
`;

const MarsAnchor = styled(HeaderAnchor)`
  &:hover {
    border-top: 4px solid ${({ theme }) => theme.colors.valencia};
  }

  &.active {
    border-top: 4px solid ${({ theme }) => theme.colors.valencia};
  }

  @media screen and (max-width: 1165px) {
    &:hover {
      border-top: none;
    }

    &.active {
      border-top: none;
      border-bottom: 4px solid ${({ theme }) => theme.colors.valencia};
    }
  }
`;

const JupiterAnchor = styled(HeaderAnchor)`
  &:hover {
    border-top: 4px solid ${({ theme }) => theme.colors.bloodMoon};
  }

  &.active {
    border-top: 4px solid ${({ theme }) => theme.colors.bloodMoon};
  }

  @media screen and (max-width: 1165px) {
    &:hover {
      border-top: none;
    }

    &.active {
      border-top: none;
      border-bottom: 4px solid ${({ theme }) => theme.colors.bloodMoon};
    }
  }
`;

const SaturnAnchor = styled(HeaderAnchor)`
  &:hover {
    border-top: 4px solid ${({ theme }) => theme.colors.rustyNail};
  }

  &.active {
    border-top: 4px solid ${({ theme }) => theme.colors.rustyNail};
  }

  @media screen and (max-width: 1165px) {
    &:hover {
      border-top: none;
    }

    &.active {
      border-top: none;
      border-bottom: 4px solid ${({ theme }) => theme.colors.rustyNail};
    }
  }
`;

const UranusAnchor = styled(HeaderAnchor)`
  &:hover {
    border-top: 4px solid ${({ theme }) => theme.colors.caribbeanGreen};
  }

  &.active {
    border-top: 4px solid ${({ theme }) => theme.colors.caribbeanGreen};
  }

  @media screen and (max-width: 1165px) {
    &:hover {
      border-top: none;
    }

    &.active {
      border-top: none;
      border-bottom: 4px solid ${({ theme }) => theme.colors.caribbeanGreen};
    }
  }
`;

const NeptuneAnchor = styled(HeaderAnchor)`
  &:hover {
    border-top: 4px solid ${({ theme }) => theme.colors.blue};
  }

  &.active {
    border-top: 4px solid ${({ theme }) => theme.colors.blue};
  }

  @media screen and (max-width: 1165px) {
    &:hover {
      border-top: none;
    }

    &.active {
      border-top: none;
      border-bottom: 4px solid ${({ theme }) => theme.colors.blue};
    }
  }
`;

const Navigation = () => {
  return (
    <StyledNav>
      <HeaderNavigation>
        <HeaderLi>
          <MercuryAnchor to='/mercury'>Mercury</MercuryAnchor>
        </HeaderLi>
        <HeaderLi>
          <VenusAnchor to='/venus'>Venus</VenusAnchor>
        </HeaderLi>
        <HeaderLi>
          <EarthAnchor
            className={(navData) => (navData.isActive ? 'active' : '')}
            to='/'
          >
            Earth
          </EarthAnchor>
        </HeaderLi>
        <HeaderLi>
          <MarsAnchor to='/mars'>Mars</MarsAnchor>
        </HeaderLi>
        <HeaderLi>
          <JupiterAnchor to='/jupiter'>Jupiter</JupiterAnchor>
        </HeaderLi>
        <HeaderLi>
          <SaturnAnchor to='/saturn'>Saturn</SaturnAnchor>
        </HeaderLi>
        <HeaderLi>
          <UranusAnchor to='/uranus'>Uranus</UranusAnchor>
        </HeaderLi>
        <HeaderLi>
          <NeptuneAnchor to='/neptune'>Neptune</NeptuneAnchor>
        </HeaderLi>
      </HeaderNavigation>
    </StyledNav>
  );
};

export default Navigation;