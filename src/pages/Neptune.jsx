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
  NeptuneImg,
  NeptuneInternalImg,
  NeptuneGeoImg,
} from '../../public';

const NeptuneContainer = styled(PlanetContainer)`
  height: 45rem;
  width: 45rem;
  margin-top: 3rem;

  @media screen and (max-width: 720px) {
    height: 20rem;
    width: 20rem;
  }
`;

const NeptunePlanet = styled(Planet)`
  height: 100%;
  width: 100%;
`;

const NeptuneGeology = styled(PlanetGeology)`
  top: 30.5rem;
  left: 14.3rem;

  @media screen and (max-width: 720px) {
    top: 14rem;
    left: 5.9rem;
  }
`;

const NeptuneOverviewBtn = styled(OverviewBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.blue : 'transparent'};

  @media screen and (max-width: 1165px) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.blue};
    }
  }

  @media screen and (max-width: 720px) {
    background-color: ${(props) =>
      props.active ? 'transparent' : 'transparent'};

    border-bottom: ${(props) =>
      props.active
        ? ({ theme }) => theme.colors.blue + ' 4px solid'
        : 'transparent'};

    &:hover {
      background-color: transparent;
    }
  }
`;

const NeptuneInternalStructureBtn = styled(InternalStructureBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.blue : 'transparent'};

  @media screen and (max-width: 1165px) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.blue};
    }
  }

  @media screen and (max-width: 720px) {
    background-color: ${(props) =>
      props.active ? 'transparent' : 'transparent'};

    border-bottom: ${(props) =>
      props.active
        ? ({ theme }) => theme.colors.blue + ' 4px solid'
        : 'transparent'};

    &:hover {
      background-color: transparent;
    }
  }
`;

const NeptuneSurfaceGeologyBtn = styled(SurfaceGeologyBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.blue : 'transparent'};

  @media screen and (max-width: 1165px) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.blue};
    }
  }

  @media screen and (max-width: 720px) {
    background-color: ${(props) =>
      props.active ? 'transparent' : 'transparent'};

    border-bottom: ${(props) =>
      props.active
        ? ({ theme }) => theme.colors.blue + ' 4px solid'
        : 'transparent'};

    &:hover {
      background-color: transparent;
    }
  }
`;

const Neptune = () => {
  const [content, setContent] = useState(APIData[7].overview.content);
  const [planetUrl, setPlanetUrl] = useState(APIData[7].overview.source);
  const [btnOverviewActive, setBtnOverviewActive] = useState(true);
  const [btnStructureActive, setBtnStructureActive] = useState(false);
  const [btnGeologyActive, setBtnGeologyActive] = useState(false);
  const [planetImg, setPlanetImg] = useState(NeptuneImg);
  const [visibleGeo, setVisibleGeo] = useState(false);

  const btnOverviewActiveHandler = () => {
    setBtnOverviewActive(true);
    setBtnStructureActive(false);
    setBtnGeologyActive(false);

    setContent(APIData[7].overview.content);
    setPlanetUrl(APIData[7].overview.source);
    setPlanetImg(NeptuneImg);
    setVisibleGeo(false);
  };

  const btnStructureActiveHandler = () => {
    setBtnOverviewActive(false);
    setBtnStructureActive(true);
    setBtnGeologyActive(false);

    setContent(APIData[7].structure.content);
    setPlanetUrl(APIData[7].structure.source);
    setPlanetImg(NeptuneInternalImg);
    setVisibleGeo(false);
  };

  const btnGeologyActiveHandler = () => {
    setBtnOverviewActive(false);
    setBtnStructureActive(false);
    setBtnGeologyActive(true);

    setContent(APIData[7].geology.content);
    setPlanetUrl(APIData[7].overview.source);
    setPlanetImg(NeptuneImg);
    setVisibleGeo(true);
  };

  return (
    <MainWrapper>
      <MainSection>
        <NeptuneContainer>
          {NeptuneImg ? (
            <NeptunePlanet src={planetImg} alt='Image of planet neptune' />
          ) : (
            <MarsPlanet
              src={planetImg}
              alt='Image of planet neptune and its structure'
            />
          )}
          <NeptuneGeology
            visibleGeo={visibleGeo}
            src={NeptuneGeoImg}
            alt={'Image of planet neptune and geology'}
          />
        </NeptuneContainer>
        <PlanetContentContainer>
          <Heading>{APIData[7].name}</Heading>
          <PlanetContent>{content}</PlanetContent>
          <WikiLink
            url={`${planetUrl}`}
            ariaLabel='Link to Wikipedia article for Neptune'
          />
        </PlanetContentContainer>
        <ContentNavigationContainer>
          <NeptuneOverviewBtn
            btnOverviewActiveHandler={btnOverviewActiveHandler}
            active={btnOverviewActive}
          />
          <NeptuneInternalStructureBtn
            btnStructureActiveHandler={btnStructureActiveHandler}
            active={btnStructureActive}
          />
          <NeptuneSurfaceGeologyBtn
            btnGeologyActiveHandler={btnGeologyActiveHandler}
            active={btnGeologyActive}
          />
        </ContentNavigationContainer>
        <PlanetFactsContainer>
          <PlanetFactsCard>
            <PlanetFactsHeadingRotation />
            <PlanetFact>{APIData[7].rotation}</PlanetFact>
          </PlanetFactsCard>
          <PlanetFactsCard>
            <PlanetFactsHeadingRevolution />
            <PlanetFact>{APIData[7].revolution}</PlanetFact>
          </PlanetFactsCard>
          <PlanetFactsCard>
            <PlanetFactsHeadingRadius />
            <PlanetFact>{APIData[7].radius}</PlanetFact>
          </PlanetFactsCard>
          <PlanetFactsCard>
            <PlanetFactsHeadingTemp />
            <PlanetFact>{APIData[7].temperature}</PlanetFact>
          </PlanetFactsCard>
        </PlanetFactsContainer>
      </MainSection>
    </MainWrapper>
  );
};

export default Neptune;