import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(auto, 2fr);
  grid-template-rows: repeat(auto, 2fr);
  margin-top: 12.6rem;
  row-gap: 3.9rem;

  @media screen and (max-width: 720px) {
    margin-top: 0;
    grid-template-areas:
      'contentNav'
      'planet'
      'wikipediaContent'
      'facts';
  }
`;

const MainSection = ({ children, className }) => {
  return <MainWrapper className={className}>{children}</MainWrapper>;
};

export default MainSection;