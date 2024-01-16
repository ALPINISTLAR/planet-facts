import React from 'react';
import styled from 'styled-components';

const Fact = styled.h3`
  color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 1165px) {
    font-size: 2.4rem;
    line-height: 3.6rem;
  }

  @media screen and (max-width: 720px) {
    font-size: 2rem;
    line-height: 3rem;
  }
`;

const PlanetFact = ({ children }) => {
  return <Fact>{children}</Fact>;
};

export default PlanetFact;