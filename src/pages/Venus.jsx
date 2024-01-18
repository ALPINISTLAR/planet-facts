import React, { useState } from 'react';
import styled from 'styled-components';
import {
  MainWrapper,
  PlanetContainer,
  MainSection,
  Heading,
  PlanetContent,
  ContentNavigationContainer,
  PlanetContentContainer,
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
  UranusImg,
  UranusInternalImg,
  UranusGeoImg,
} from '../../public';

const UranusContainer = styled(PlanetContainer)`
  height: 45.8rem;
  width: 45.8rem;
  margin-top: 0rem;

  @media screen and (max-width: 720px) {
    margin-top: 3rem;
    height: 21rem;
    width: 21rem;
  }
`;

const UranusPlanet = styled(Planet)`
  height: 100%;
  width: 100%;
`;

const UranusGeology = styled(PlanetGeology)`
  top: 31rem;
  left: 14.8rem;

  @media screen and (max-width: 720px) {
    top: 14rem;
    left: 6.5rem;
  }
`;

const UranusOverviewBtn = styled(OverviewBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.caribbeanGreen : 'transparent'};

  @media screen and (max-width: 1165px) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.caribbeanGreen};
    }
  }

  @media screen and (max-width: 720px) {
    background-color: ${(props) =>
      props.active ? 'transparent' : 'transparent'};

    border-bottom: ${(props) =>
      props.active
        ? ({ theme }) => theme.colors.caribbeanGreen + ' 4px solid'
        : 'transparent'};

    &:hover {
      background-color: transparent;
    }
  }
`;

const UranusInternalStructureBtn = styled(InternalStructureBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.caribbeanGreen : 'transparent'};

  @media screen and (max-width: 1165px) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.caribbeanGreen};
    }
  }

  @media screen and (max-width: 720px) {
    background-color: ${(props) =>
      props.active ? 'transparent' : 'transparent'};

    border-bottom: ${(props) =>
      props.active
        ? ({ theme }) => theme.colors.caribbeanGreen + ' 4px solid'
        : 'transparent'};

    &:hover {
      background-color: transparent;
    }
  }
`;

const UranusSurfaceGeologyBtn = styled(SurfaceGeologyBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.caribbeanGreen : 'transparent'};

  @media screen and (max-width: 1165px) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.caribbeanGreen};
    }
  }

  @media screen and (max-width: 720px) {
    background-color: ${(props) =>
      props.active ? 'transparent' : 'transparent'};

    border-bottom: ${(props) =>
      props.active
        ? ({ theme }) => theme.colors.caribbeanGreen + ' 4px solid'
        : 'transparent'};

    &:hover {
      background-color: transparent;
    }
  }
`;

const Uranus = () => {
  const [content, setContent] = useState(APIData[6].overview.content);
  const [planetUrl, setPlanetUrl] = useState(APIData[6].overview.source);
  const [btnOverviewActive, setBtnOverviewActive] = useState(true);
  const [btnStructureActive, setBtnStructureActive] = useState(false);
  const [btnGeologyActive, setBtnGeologyActive] = useState(false);
  const [planetImg, setPlanetImg] = useState(UranusImg);
  const [visibleGeo, setVisibleGeo] = useState(false);

  const btnOverviewActiveHandler = () => {
    setBtnOverviewActive(true);
    setBtnStructureActive(false);
    setBtnGeologyActive(false);

    setContent(APIData[6].overview.content);
    setPlanetUrl(APIData[6].overview.source);
    setPlanetImg(UranusImg);
    setVisibleGeo(false);
  };

  const btnStructureActiveHandler = () => {
    setBtnOverviewActive(false);
    setBtnStructureActive(true);
    setBtnGeologyActive(false);

    setContent(APIData[6].structure.content);
    setPlanetUrl(APIData[6].structure.source);
    setPlanetImg(UranusInternalImg);
    setVisibleGeo(false);
  };

  const btnGeologyActiveHandler = () => {
    setBtnOverviewActive(false);
    setBtnStructureActive(false);
    setBtnGeologyActive(true);

    setContent(APIData[6].geology.content);
    setPlanetUrl(APIData[6].overview.source);
    setPlanetImg(UranusImg);
    setVisibleGeo(true);
  };

  return (
    <MainWrapper>
      <MainSection>
        <UranusContainer>
          {UranusImg ? (
            <UranusPlanet src={planetImg} alt='Image of planet uranus' />
          ) : (
            <UranusPlanet
              src={planetImg}
              alt='Image of planet uranus and its structure'
            />
          )}
          <UranusGeology
            visibleGeo={visibleGeo}
            src={UranusGeoImg}
            alt={'Image of planet uranus and geology'}
          />
        </UranusContainer>
        <PlanetContentContainer>
          <Heading>{APIData[6].name}</Heading>
          <PlanetContent>{content}</PlanetContent>
          <WikiLink
            url={`${planetUrl}`}
            ariaLabel='Link to Wikipedia article for Uranus'
          />
        </PlanetContentContainer>
        <ContentNavigationContainer>
          <UranusOverviewBtn
            btnOverviewActiveHandler={btnOverviewActiveHandler}
            active={btnOverviewActive}
          />
          <UranusInternalStructureBtn
            btnStructureActiveHandler={btnStructureActiveHandler}
            active={btnStructureActive}
          />
          <UranusSurfaceGeologyBtn
            btnGeologyActiveHandler={btnGeologyActiveHandler}
            active={btnGeologyActive}
          />
        </ContentNavigationContainer>
        <PlanetFactsContainer>
          <PlanetFactsCard>
            <PlanetFactsHeadingRotation />
            <PlanetFact>{APIData[6].rotation}</PlanetFact>
          </PlanetFactsCard>
          <PlanetFactsCard>
            <PlanetFactsHeadingRevolution />
            <PlanetFact>{APIData[6].revolution}</PlanetFact>
          </PlanetFactsCard>
          <PlanetFactsCard>
            <PlanetFactsHeadingRadius />
            <PlanetFact>{APIData[6].radius}</PlanetFact>
          </PlanetFactsCard>
          <PlanetFactsCard>
            <PlanetFactsHeadingTemp />
            <PlanetFact>{APIData[6].temperature}</PlanetFact>
          </PlanetFactsCard>
        </PlanetFactsContainer>
      </MainSection>
    </MainWrapper>
  );
};

export default Uranus;