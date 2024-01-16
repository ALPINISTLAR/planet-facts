import React from 'react';
import styled from 'styled-components';

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 35rem;
  justify-self: end;

  @media screen and (max-width: 1165px) {
    width: 28rem;
    margin-top: 5.6rem;
  }

  @media screen and (max-width: 720px) {
    width: 100%;
    height: 5rem;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.2);
    gap: 0;
    grid-area: contentNav;
    margin-top: 0;
    flex-direction: row;
    justify-self: center;
    align-items: center;
    justify-content: space-around;
    padding: 0 2.4rem;
  }

  @media screen and (max-width: 500px) {
    justify-content: space-between;
  }
`;

const ContentNavigationContainer = ({ children }) => {
  return <ButtonsContainer>{children}</ButtonsContainer>;
};

export default ContentNavigationContainer;