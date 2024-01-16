import React from 'react';
import styled from 'styled-components';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { fadeInAnimationRightToLeft } from '../animations/Animations';

const ContentWrapper = styled.div`
  animation: ${fadeInAnimationRightToLeft}
    ${({ theme }) => theme.transitionDuration.duration} ease-out;
`;

const Content = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.4rem;

  &.fadeInAnimation-enter {
    opacity: 0;
  }

  &.fadeInAnimation-enter-active {
    opacity: 1;
    transition: opacity
      ${({ theme }) => theme.transitionDuration.fadeInDuration} linear;
  }

  &.fadeInAnimation-exit {
    opacity: 1;
  }

  &.fadeInAnimation-exit-active {
    opacity: 0;
    transition: opacity
      ${({ theme }) => theme.transitionDuration.fadeInDuration} linear;
  }

  @media screen and (max-width: 1165px) {
    font-size: 1.1rem;
  }
`;

const PlanetContent = ({ children, className }) => {
  return (
    <ContentWrapper>
      <SwitchTransition mode='out-in'>
        <CSSTransition
          classNames='fadeInAnimation'
          addEndListener={(node, done) => {
            node.addEventListener('transitionend', done, false);
          }}
          key={Math.random() * 100}
        >
          <Content className={className}>{children}</Content>
        </CSSTransition>
      </SwitchTransition>
    </ContentWrapper>
  );
};

export default PlanetContent;