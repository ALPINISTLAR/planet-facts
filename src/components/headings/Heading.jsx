import React from 'react';
import styled from 'styled-components';
import { fadeInAnimationBottomToTop } from '../animations/Animations';

const PlanetHeading = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  animation: ${fadeInAnimationBottomToTop}
    ${({ theme }) => theme.transitionDuration.duration} ease-out;
  text-transform: uppercase;

  @media screen and (max-width: 1165px) {
    font-size: 4.8rem;
    line-height: 7.2rem;
  }

  @media screen and (max-width: 720px) {
    font-size: 4rem;
    line-height: 6rem;
  }
`;

const Heading = ({ children, className }) => {
  return <PlanetHeading className={className}>{children}</PlanetHeading>;
};

export default Heading;