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
import MercuryImg from '../../public/planet-mercury.svg';
import MercuryInternalImg from '../../public/planet-mercury-internal.svg';
import MercuryGeoImg from '../../public/geology-mercury.png';
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

const MercuryOverviewBtn = styled(OverviewBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.cerulean : 'transparent'};

  @media screen and (max-width: 1165px) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.cerulean};
    }
  }

  @media screen and (max-width: 720px) {
    background-color: ${(props) =>
      props.active ? 'transparent' : 'transparent'};

    border-bottom: ${(props) =>
      props.active
        ? ({ theme }) => theme.colors.cerulean + ' 4px solid'
        : 'transparent'};

    &:hover {
      background-color: transparent;
    }
  }
`;

const MercuryInternalStructureBtn = styled(InternalStructureBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.cerulean : 'transparent'};

  @media screen and (max-width: 1165px) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.cerulean};
    }
  }

  @media screen and (max-width: 720px) {
    background-color: ${(props) =>
      props.active ? 'transparent' : 'transparent'};

    border-bottom: ${(props) =>
      props.active
        ? ({ theme }) => theme.colors.cerulean + ' 4px solid'
        : 'transparent'};

    &:hover {
      background-color: transparent;
    }
  }
`;

const MercurySurfaceGeologyBtn = styled(SurfaceGeologyBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.cerulean : 'transparent'};

  @media screen and (max-width: 1165px) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.cerulean};
    }
  }

  @media screen and (max-width: 720px) {
    background-color: ${(props) =>
      props.active ? 'transparent' : 'transparent'};

    border-bottom: ${(props) =>
      props.active
        ? ({ theme }) => theme.colors.cerulean + ' 4px solid'
        : 'transparent'};

    &:hover {
      background-color: transparent;
    }
  }
`;

const Mercury = () => {
  const [content, setContent] = useState(APIData[0].overview.content);
  const [planetUrl, setPlanetUrl] = useState(APIData[0].overview.source);
  const [btnOverviewActive, setBtnOverviewActive] = useState(true);
  const [btnStructureActive, setBtnStructureActive] = useState(false);
  const [btnGeologyActive, setBtnGeologyActive] = useState(false);
  const [planetImg, setPlanetImg] = useState(MercuryImg);
  const [visibleGeo, setVisibleGeo] = useState(false);

  const btnOverviewActiveHandler = () => {
    setBtnOverviewActive(true);
    setBtnStructureActive(false);
    setBtnGeologyActive(false);

    setContent(APIData[0].overview.content);
    setPlanetUrl(APIData[0].overview.source);
    setPlanetImg(MercuryImg);
    setVisibleGeo(false);
  };

  const btnStructureActiveHandler = () => {
    setBtnOverviewActive(false);
    setBtnStructureActive(true);
    setBtnGeologyActive(false);

    setContent(APIData[0].structure.content);
    setPlanetUrl(APIData[0].structure.source);
    setPlanetImg(MercuryInternalImg);
    setVisibleGeo(false);
  };

  const btnGeologyActiveHandler = () => {
    setBtnOverviewActive(false);
    setBtnStructureActive(false);
    setBtnGeologyActive(true);

    setContent(APIData[0].geology.content);
    setPlanetUrl(APIData[0].overview.source);
    setPlanetImg(MercuryImg);
    setVisibleGeo(true);
  };

  return (
    <MainWrapper>
      <MainSection>
        <PlanetContainer>
          {MercuryImg ? (
            <Planet src={planetImg} alt='Image of planet mercury' />
          ) : (
            <Planet
              src={planetImg}
              alt='Image of planet mercury and its structure'
            />
          )}
          <PlanetGeology
            visibleGeo={visibleGeo}
            src={MercuryGeoImg}
            alt={'Image of planet mercury and geology'}
          />
        </PlanetContainer>
        <PlanetContentContainer>
          <Heading>{APIData[0].name}</Heading>
          <PlanetContent>{content}</PlanetContent>
          <WikiLink
            url={`${planetUrl}`}
            ariaLabel='Link to Wikipedia article for Mercury'
          />
        </PlanetContentContainer>
        <ContentNavigationContainer>
          <MercuryOverviewBtn
            btnOverviewActiveHandler={btnOverviewActiveHandler}
            active={btnOverviewActive}
          />
          <MercuryInternalStructureBtn
            btnStructureActiveHandler={btnStructureActiveHandler}
            active={btnStructureActive}
          />
          <MercurySurfaceGeologyBtn
            btnGeologyActiveHandler={btnGeologyActiveHandler}
            active={btnGeologyActive}
          />
        </ContentNavigationContainer>
        <PlanetFactsContainer>
          <PlanetFactsCard>
            <PlanetFactsHeadingRotation />
            <PlanetFact>{APIData[0].rotation}</PlanetFact>
          </PlanetFactsCard>
          <PlanetFactsCard>
            <PlanetFactsHeadingRevolution />
            <PlanetFact>{APIData[0].revolution}</PlanetFact>
          </PlanetFactsCard>
          <PlanetFactsCard>
            <PlanetFactsHeadingRadius />
            <PlanetFact>{APIData[0].radius}</PlanetFact>
          </PlanetFactsCard>
          <PlanetFactsCard>
            <PlanetFactsHeadingTemp />
            <PlanetFact>{APIData[0].temperature}</PlanetFact>
          </PlanetFactsCard>
        </PlanetFactsContainer>
      </MainSection>
    </MainWrapper>
  );
};

export default Mercury;