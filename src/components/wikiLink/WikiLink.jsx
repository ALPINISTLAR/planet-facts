import React from 'react';
import styled from 'styled-components';
import SourceIcon from '../../../public/icon-source.svg';
import { fadeInAnimationBottomToTop } from '../animations/Animations';

const LinkContainer = styled.div`
  display: flex;

  @media screen and (max-width: 1165px) {
    margin-top: 1.8rem;
  }
`;

const Source = styled.p`
  color: ${({ theme }) => theme.colors.whiteTransparent};
  font-size: 1.4rem;
  animation: ${fadeInAnimationBottomToTop}
    ${({ theme }) => theme.transitionDuration.duration} ease-out;

  @media screen and (max-width: 1165px) {
    font-size: 1.2rem;
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.whiteTransparent};
  font-weight: bold;
  cursor: pointer;
  margin-left: 0.2rem;
  font-size: 1.4rem;
  text-decoration: underline;
  animation: ${fadeInAnimationBottomToTop}
    ${({ theme }) => theme.transitionDuration.duration} ease-out;

  &::after {
    content: url(${SourceIcon});
    margin-left: 0.7rem;
  }

  @media screen and (max-width: 1165px) {
    font-size: 1.2rem;
  }
`;

const WikiLink = ({ url, ariaLabel }) => {
  return (
    <LinkContainer>
      <Source>Source :</Source>
      <Link target='blank' href={url} aria-label={ariaLabel}>
        Wikipedia
      </Link>
    </LinkContainer>
  );
};

export default WikiLink;