import React, { useState } from 'react';
import styled from 'styled-components';
import {
  MainWrapper,
  PlanetContainer,
  MainSection,
  Heading,
  PlanetContent,
  PlanetContentContainer,
  ContentNavigationContainer,
  WikiLink,
} from '../components';
import {
  OverviewBtn,
  InternalStructureBtn,
  SurfaceGeologyBtn,
} from '../components/planetContentNavigation';
import {
  PlanetFactsContainer,
  PlanetFactsCard,
  PlanetFactsHeadingRotation,
  PlanetFactsHeadingRevolution,
  PlanetFactsHeadingRadius,
  PlanetFactsHeadingTemp,
  PlanetFact,
} from '../components/PlanetFactsCard';
import { Planet, PlanetGeology } from '../components/planets';
import {
  SaturnImg,
  SaturnInternalImg,
  SaturnGeoImg,
} from '../../public';

const SaturnContainer = styled(PlanetContainer)`
  height: 58.2rem;
  width: 58.2rem;
  margin-top: -7rem;

  @media screen and (max-width: 720px) {
    margin-top: 3rem;
    height: 28rem;
    width: 28rem;
  }
`;

const SaturnPlanet = styled(Planet)`
  height: 100%;
  width: 100%;
`;

const SaturnGeology = styled(PlanetGeology)`
  top: 35rem;
  left: 20.9rem;

  @media screen and (max-width: 720px) {
    top: 16.5rem;
    left: 9.8rem;
  }
`;

const SaturnOverviewBtn = styled(OverviewBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.rustyNail : 'transparent'};

  @media screen and (max-width: 1165px) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.rustyNail};
    }
  }

  @media screen and (max-width: 720px) {
    background-color: ${(props) =>
      props.active ? 'transparent' : 'transparent'};

    border-bottom: ${(props) =>
      props.active
        ? ({ theme }) => theme.colors.rustyNail + ' 4px solid'
        : 'transparent'};

    &:hover {
      background-color: transparent;
    }
  }
`;

const SaturnInternalStructureBtn = styled(InternalStructureBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.rustyNail : 'transparent'};

  @media screen and (max-width: 1165px) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.rustyNail};
    }
  }

  @media screen and (max-width: 720px) {
    background-color: ${(props) =>
      props.active ? 'transparent' : 'transparent'};

    border-bottom: ${(props) =>
      props.active
        ? ({ theme }) => theme.colors.rustyNail + ' 4px solid'
        : 'transparent'};

    &:hover {
      background-color: transparent;
    }
  }
`;

const SaturnSurfaceGeologyBtn = styled(SurfaceGeologyBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.rustyNail : 'transparent'};

  @media screen and (max-width: 1165px) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.rustyNail};
    }
  }

  @media screen and (max-width: 720px) {
    background-color: ${(props) =>
      props.active ? 'transparent' : 'transparent'};

    border-bottom: ${(props) =>
      props.active
        ? ({ theme }) => theme.colors.rustyNail + ' 4px solid'
        : 'transparent'};

    &:hover {
      background-color: transparent;
    }
  }
`;

const SaturnFactsContainer = styled(PlanetFactsContainer)`
  margin: 2rem 0 10rem 0;
`;

const Saturn = () => {
  const [content, setContent] = useState(APIData[5].overview.content);
  const [planetUrl, setPlanetUrl] = useState(APIData[5].overview.source);
  const [btnOverviewActive, setBtnOverviewActive] = useState(true);
  const [btnStructureActive, setBtnStructureActive] = useState(false);
  const [btnGeologyActive, setBtnGeologyActive] = useState(false);
  const [planetImg, setPlanetImg] = useState(SaturnImg);
  const [visibleGeo, setVisibleGeo] = useState(false);

  const btnOverviewActiveHandler = () => {
    setBtnOverviewActive(true);
    setBtnStructureActive(false);
    setBtnGeologyActive(false);

    setContent(APIData[5].overview.content);
    setPlanetUrl(APIData[5].overview.source);
    setPlanetImg(SaturnImg);
    setVisibleGeo(false);
  };

  const btnStructureActiveHandler = () => {
    setBtnOverviewActive(false);
    setBtnStructureActive(true);
    setBtnGeologyActive(false);

    setContent(APIData[5].structure.content);
    setPlanetUrl(APIData[5].structure.source);
    setPlanetImg(SaturnInternalImg);
    setVisibleGeo(false);
  };

  const btnGeologyActiveHandler = () => {
    setBtnOverviewActive(false);
    setBtnStructureActive(false);
    setBtnGeologyActive(true);

    setContent(APIData[5].geology.content);
    setPlanetUrl(APIData[5].overview.source);
    setPlanetImg(SaturnImg);
    setVisibleGeo(true);
  };

  return (
    <MainWrapper>
      <MainSection>
        <SaturnContainer>
          {SaturnImg ? (
            <SaturnPlanet src={planetImg} alt='Image of planet saturn' />
          ) : (
            <SaturnPlanet
              src={planetImg}
              alt='Image of planet saturn and its structure'
            />
          )}
          <SaturnGeology
            visibleGeo={visibleGeo}
            src={SaturnGeoImg}
            alt={'Image of planet saturn and geology'}
          />
        </SaturnContainer>
        <PlanetContentContainer>
          <Heading>{APIData[5].name}</Heading>
          <PlanetContent>{content}</PlanetContent>
          <WikiLink
            url={`${planetUrl}`}
            ariaLabel='Link to Wikipedia article for Saturn'
          />
        </PlanetContentContainer>
        <ContentNavigationContainer>
          <SaturnOverviewBtn
            btnOverviewActiveHandler={btnOverviewActiveHandler}
            active={btnOverviewActive}
          />
          <SaturnInternalStructureBtn
            btnStructureActiveHandler={btnStructureActiveHandler}
            active={btnStructureActive}
          />
          <SaturnSurfaceGeologyBtn
            btnGeologyActiveHandler={btnGeologyActiveHandler}
            active={btnGeologyActive}
          />
        </ContentNavigationContainer>
        <SaturnFactsContainer>
          <PlanetFactsCard>
            <PlanetFactsHeadingRotation />
            <PlanetFact>{APIData[5].rotation}</PlanetFact>
          </PlanetFactsCard>
          <PlanetFactsCard>
            <PlanetFactsHeadingRevolution />
            <PlanetFact>{APIData[5].revolution}</PlanetFact>
          </PlanetFactsCard>
          <PlanetFactsCard>
            <PlanetFactsHeadingRadius />
            <PlanetFact>{APIData[5].radius}</PlanetFact>
          </PlanetFactsCard>
          <PlanetFactsCard>
            <PlanetFactsHeadingTemp />
            <PlanetFact>{APIData[5].temperature}</PlanetFact>
          </PlanetFactsCard>
        </SaturnFactsContainer>
      </MainSection>
    </MainWrapper>
  );
};

export default Saturn;