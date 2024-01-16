import React, { useState } from 'react';
import styled from 'styled-components';
import APIData from '../APIData';
import MainWrapper from '../components/main/MainWrapper';
import PlanetContainer from '../components/planets/PlanetContainer';
import MainSection from '../components/main/MainSection';
import Heading from '../components/headings/Heading';
import PlanetContent from '../components/planetContent/PlanetContent';
import PlanetContentContainer from '../components/planetContent/planetContentContainer/PlanetContentContainer';
import ContentNavigationContainer from '../components/planetContentNavigation/ContentNavigationContainer';
import OverviewBtn from '../components/planetContentNavigation/OverviewBtn';
import InternalStructureBtn from '../components/planetContentNavigation/InternalStructureBtn';
import SurfaceGeologyBtn from '../components/planetContentNavigation/SurfaceGeologyBtn';
import WikiLink from '../components/wikiLink/WikiLink';
import SaturnImg from '../../public/planet-saturn.svg';
import SaturnInternalImg from '../../public/planet-saturn-internal.svg';
import SaturnGeoImg from '../../public/geology-saturn.png';
import PlanetFactsContainer from '../components/PlanetFactsCard/PlanetFactsContainer';
import PlanetFactsCard from '../components/PlanetFactsCard/PlanetFactsCard';
import {
  PlanetFactsHeadingRotation,
  PlanetFactsHeadingRevolution,
  PlanetFactsHeadingRadius,
  PlanetFactsHeadingTemp,
} from '../components/PlanetFactsCard/PlanetFactsHeading';
import PlanetFact from '../components/PlanetFactsCard/PlanetFact';
import Planet from '../components/planets/Planet';
import PlanetGeology from '../components/planets/PlanetGeology';

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