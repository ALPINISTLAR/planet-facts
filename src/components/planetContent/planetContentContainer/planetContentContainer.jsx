import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
  gap: 2.4rem;
  justify-self: end;

  @media screen and (max-width: 1165px) {
    gap: 1.4rem;
    justify-self: flex-start;
  }

  @media screen and (max-width: 720px) {
    justify-self: center;
    text-align: center;
    align-items: center;
    width: 90%;
    grid-area: wikipediaContent;
  }
`;

const PlanetContentContainer = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>;
};

export default PlanetContentContainer;