import React from 'react';
import styled from 'styled-components';
import { fadeInAnimationBottomToTop } from '../animations/Animations';

const ButtonOverview = styled.button`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  border: 0.1rem solid ${({ theme }) => theme.colors.darkGrey};
  height: 4.8rem;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: left;
  cursor: pointer;
  animation: ${fadeInAnimationBottomToTop}
    ${({ theme }) => theme.transitionDuration.duration} ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }

  &::before {
    color: ${({ theme }) => theme.colors.whiteTransparent};
    margin: 0 2rem 0 2rem;
    content: '01';
  }

  @media screen and (max-width: 1165px) {
    font-size: 0.9rem;
    height: 4rem;
  }

  @media screen and (max-width: 720px) {
    display: inline-block;
    height: 100%;
    border: none;

    &::before {
      display: none;
    }
  }
`;

const OverviewBtn = ({ className, btnOverviewActiveHandler, active }) => {
  return (
    <ButtonOverview
      active={active}
      className={className}
      onClick={btnOverviewActiveHandler}
    >
      Overview
    </ButtonOverview>
  );
};

export default OverviewBtn;