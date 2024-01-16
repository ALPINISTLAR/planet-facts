import React from 'react';
import styled from 'styled-components';

const PlanetImg = styled.img`
  width: 29rem;
  height: 29rem;

  @media screen and (max-width: 720px) {
    width: 100%;
    height: 100%;
  }
`;

const Planet = ({ src, className, alt }) => {
  return <PlanetImg className={className} src={src} alt={alt} />;
};

export default Planet;