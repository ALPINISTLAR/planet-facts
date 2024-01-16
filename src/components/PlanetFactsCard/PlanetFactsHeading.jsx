import React from 'react';
import styled from 'styled-components';

const FactsHeading = styled.h2`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.whiteTransparent};

  @media screen and (max-width: 1165px) {
    font-size: 0.8rem;
  }
`;

export const PlanetFactsHeadingRotation = () => {
  return <FactsHeading>ROTATION TIME</FactsHeading>;
};
export const PlanetFactsHeadingRevolution = () => {
  return <FactsHeading>REVOLUTION TIME</FactsHeading>;
};
export const PlanetFactsHeadingRadius = () => {
  return <FactsHeading>radius</FactsHeading>;
};
export const PlanetFactsHeadingTemp = () => {
  return <FactsHeading>AVERAGE TEMP.</FactsHeading>;
};