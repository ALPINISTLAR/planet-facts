import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fadeInAnimationBottomToTop } from '../animations/Animations';

const ButtonGeology = styled.button`
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
    content: '02';
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

const SurfaceGeologyBtn = ({ className, btnGeologyActiveHandler, active }) => {
  const [buttonText, setButtonText] = useState('Surface Geology');
  const mobileWindow = window.matchMedia('(max-width: 720px)');

  useEffect(() => {
    mobileWindow.matches
      ? setButtonText('Surface')
      : setButtonText('Surface Geology');
  }, [buttonText]);

  return (
    <ButtonGeology
      active={active}
      className={className}
      onClick={btnGeologyActiveHandler}
    >
      {buttonText}
    </ButtonGeology>
  );
};

export default SurfaceGeologyBtn;