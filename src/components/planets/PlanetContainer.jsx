import React from 'react';
import styled from 'styled-components';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

const Planet = styled.div`
  width: 29rem;
  height: 29rem;
  grid-row: 1 / span 2;
  margin-top: 12rem;
  justify-self: end;
  position: relative;

  &.fadeInAnimation-enter {
    opacity: 0;
    transform: translateY(-50%);
  }

  &.fadeInAnimation-enter-active {
    opacity: 1;
    transform: translateY(0%);
    transition: opacity
        ${({ theme }) => theme.transitionDuration.fadeInDuration} linear,
      transform ${({ theme }) => theme.transitionDuration.fadeInDuration} linear;
  }

  &.fadeInAnimation-exit {
    opacity: 1;
  }

  &.fadeInAnimation-exit-active {
    opacity: 0;
    transition: opacity
      ${({ theme }) => theme.transitionDuration.fadeInDuration} linear;
  }

  &.fadeInAnimation-appear {
    opacity: 0;
    transform: translateY(-50%);
  }

  &.fadeInAnimation-appear-active {
    opacity: 1;
    transform: translateY(0%);
    transition: opacity ${({ theme }) => theme.transitionDuration.duration}
        linear,
      transform ${({ theme }) => theme.transitionDuration.duration} linear;
  }

  @media screen and (max-width: 1165px) {
    grid-column: 1 / span 2;
    justify-self: center;
    margin: 3rem 0 13rem 0;
  }

  @media screen and (max-width: 720px) {
    grid-column: 1 / span 1;
    justify-self: center;
    grid-area: planet;
    margin: 5rem 0 5rem 0;
    width: 14.1rem;
    height: 14.1rem;
  }
`;

const PlanetContainer = ({ children, className }) => {
  return (
    <SwitchTransition>
      <CSSTransition
        appear={true}
        in={true}
        classNames='fadeInAnimation'
        addEndListener={(node, done) => {
          node.addEventListener('transitionend', done, false);
        }}
        key={Math.random() * 100}
      >
        <Planet className={className}>{children}</Planet>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default PlanetContainer;