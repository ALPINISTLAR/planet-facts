import React, { useState } from 'react';
import styled from 'styled-components';
import APIData from '../APIData';
import MainWrapper from '../components/main/MainWrapper';
import {
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
  JupiterImg,
  JupiterInternalImg,
  JupiterGeoImg,
} from '../../public';

const JupiterContainer = styled(PlanetContainer)`
  height: 58.2rem;
  width: 58.2rem;
  margin-top: 0rem;

  @media screen and (max-width: 720px) {
    margin-top: 3rem;
    height: 25rem;
    width: 25rem;
  }
`;

const JupiterPlanet = styled(Planet)`
  height: 100%;
  width: 100%;
`;

const JupiterGeology = styled(PlanetGeology)`
  top: 37rem;
  left: 20.9rem;

  @media screen and (max-width: 720px) {
    top: 16rem;
    left: 8.3rem;
  }
`;

const StyledOverviewBtn = styled(OverviewBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.bloodMoon : 'transparent'};

  @media screen and (max-width: 1165px) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.bloodMoon};
    }
  }

  @media screen and (max-width: 720px) {
    background-color: ${(props) =>
      props.active ? 'transparent' : 'transparent'};

    border-bottom: ${(props) =>
      props.active
        ? ({ theme }) => theme.colors.bloodMoon + ' 4px solid'
        : 'transparent'};

    &:hover {
      background-color: transparent;
    }
  }
`;

const StyledInternalStructureBtn = styled(InternalStructureBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.bloodMoon : 'transparent'};

  @media screen and (max-width: 1165px) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.bloodMoon};
    }
  }

  @media screen and (max-width: 720px) {
    background-color: ${(props) =>
      props.active ? 'transparent' : 'transparent'};

    border-bottom: ${(props) =>
      props.active
        ? ({ theme }) => theme.colors.bloodMoon + ' 4px solid'
        : 'transparent'};

    &:hover {
      background-color: transparent;
    }
  }
`;

const StyledSurfaceGeologyBtn = styled(SurfaceGeologyBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.bloodMoon : 'transparent'};

  @media screen and (max-width: 1165px) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.bloodMoon};
    }
  }

  @media screen and (max-width: 720px) {
    background-color: ${(props) =>
      props.active ? 'transparent' : 'transparent'};

    border-bottom: ${(props) =>
      props.active
        ? ({ theme }) => theme.colors.bloodMoon + ' 4px solid'
        : 'transparent'};

    &:hover {
      background-color: transparent;
    }
  }
`;

const Jupiter = () => {
  const [content, setContent] = useState(APIData[4].overview.content);
  const [planetUrl, setPlanetUrl] = useState(APIData[4].overview.source);
  const [btnOverviewActive, setBtnOverviewActive] = useState(true);
  const [btnStructureActive, setBtnStructureActive] = useState(false);
  const [btnGeologyActive, setBtnGeologyActive] = useState(false);
  const [planetImg, setPlanetImg] = useState(JupiterImg);
  const [visibleGeo, setVisibleGeo] = useState(false);

  const setActiveButton = (overview, structure, geology) => {
    setBtnOverviewActive(overview);
    setBtnStructureActive(structure);
    setBtnGeologyActive(geology);
  };

  const btnOverviewActiveHandler = () => {
    setActiveButton(true, false, false);
    setContent(APIData[4].overview.content);
    setPlanetUrl(APIData[4].overview.source);
    setPlanetImg(JupiterImg);
    setVisibleGeo(false);
  };

  const btnStructureActiveHandler = () => {
    setActiveButton(false, true, false);
    setContent(APIData[4].structure.content);
    setPlanetUrl(APIData[4].structure.source);
    setPlanetImg(JupiterInternalImg);
    setVisibleGeo(false);
  };

  const btnGeologyActiveHandler = () => {
    setActiveButton(false, false, true);
    setContent(APIData[4].geology.content);
    setPlanetUrl(APIData[4].overview.source);
    setPlanetImg(JupiterImg);
    setVisibleGeo(true);
  };

  return (
    <MainWrapper>
      <MainSection>
        <JupiterContainer>
          {JupiterImg ? (
            <JupiterPlanet src={planetImg} alt='Image of planet jupiter' />
          ) : (
            <JupiterPlanet
              src={planetImg}
              alt='Image of planet jupiter and its structure'
            />
          )}
          <JupiterGeology
            visibleGeo={visibleGeo}
            src={JupiterGeoImg}
            alt={'Image of planet jupiter and geology'}
          />
        </JupiterContainer>
        <PlanetContentContainer>
          <Heading>{APIData[4].name}</Heading>
          <PlanetContent>{content}</PlanetContent>
          <WikiLink
            url={`${planetUrl}`}
            ariaLabel='Link to Wikipedia article for Jupiter'
          />
        </PlanetContentContainer>
        <ContentNavigationContainer>
          <StyledOverviewBtn
            btnOverviewActiveHandler={btnOverviewActiveHandler}
            active={btnOverviewActive}
          />
          <StyledInternalStructureBtn
            btnStructureActiveHandler={btnStructureActiveHandler}
            active={btnStructureActive}
          />
          <StyledSurfaceGeologyBtn
            btnGeologyActiveHandler={btnGeologyActiveHandler}
            active={btnGeologyActive}
          />
        </ContentNavigationContainer>
        <PlanetFactsContainer>
          <PlanetFactsCard>
            <PlanetFactsHeadingRotation />
            <PlanetFact>{APIData[4].rotation}</PlanetFact>
          </PlanetFactsCard>
          <PlanetFactsCard>
            <PlanetFactsHeadingRevolution />
            <PlanetFact>{APIData[4].revolution}</PlanetFact>
          </PlanetFactsCard>
          <PlanetFactsCard>
            <PlanetFactsHeadingRadius />
            <PlanetFact>{APIData[4].radius}</PlanetFact>
          </PlanetFactsCard>
          <PlanetFactsCard>
            <PlanetFactsHeadingTemp />
            <PlanetFact>{APIData[4].temperature}</PlanetFact>
          </PlanetFactsCard>
        </PlanetFactsContainer>
      </MainSection>
    </MainWrapper>
  );
};

export default Jupiter;
