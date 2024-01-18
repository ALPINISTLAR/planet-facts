import React, { useState } from 'react';
import styled from 'styled-components';
import APIData from '../APIData';
import {
  MainWrapper,
  PlanetContainer,
  MainSection,
  Heading,
  PlanetContent,
  PlanetContentContainer,
  ContentNavigationContainer,
  WikiLink,
  OverviewBtn,
  InternalStructureBtn,
  SurfaceGeologyBtn,
} from '../components';
import { EarthImg, EarthInternalImg, EarthGeoImg } from '../../public';

const EarthContainer = styled(PlanetContainer)`
  height: 45rem;
  width: 45rem;
  margin-top: 3rem;

  @media screen and (max-width: 720px) {
    height: 20rem;
    width: 20rem;
  }
`;

const EarthPlanet = styled(Planet)`
  height: 100%;
  width: 100%;
`;

const EarthGeology = styled(PlanetGeology)`
  top: 30.5rem;
  left: 14.4rem;

  @media screen and (max-width: 720px) {
    top: 14rem;
    left: 5.9rem;
  }
`;

const EarthOverviewBtn = styled(OverviewBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.purple : 'transparent'};

  @media screen and (max-width: 1165px) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.purple};
    }
  }

  @media screen and (max-width: 720px) {
    background-color: ${(props) =>
      props.active ? 'transparent' : 'transparent'};

    border-bottom: ${(props) =>
      props.active
        ? ({ theme }) => theme.colors.purple + ' 4px solid'
        : 'transparent'};

    &:hover {
      background-color: transparent;
    }
  }
`;

const EarthInternalStructureBtn = styled(InternalStructureBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.purple : 'transparent'};

  @media screen and (max-width: 1165px) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.purple};
    }
  }

  @media screen and (max-width: 720px) {
    background-color: ${(props) =>
      props.active ? 'transparent' : 'transparent'};

    border-bottom: ${(props) =>
      props.active
        ? ({ theme }) => theme.colors.purple + ' 4px solid'
        : 'transparent'};

    &:hover {
      background-color: transparent;
    }
  }
`;

const EarthSurfaceGeologyBtn = styled(SurfaceGeologyBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.purple : 'transparent'};

  @media screen and (max-width: 1165px) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.purple};
    }
  }

  @media screen and (max-width: 720px) {
    background-color: ${(props) =>
      props.active ? 'transparent' : 'transparent'};

    border-bottom: ${(props) =>
      props.active
        ? ({ theme }) => theme.colors.purple + ' 4px solid'
        : 'transparent'};

    &:hover {
      background-color: transparent;
    }
  }
`;

const Earth = () => {
  const initialState = {
    content: APIData[2].overview.content,
    planetUrl: APIData[2].overview.source,
    btnOverviewActive: true,
    btnStructureActive: false,
    btnGeologyActive: false,
    planetImg: EarthImg,
    visibleGeo: false,
  };

  const [state, setState] = useState(initialState);

  const setActiveButton = (overview, structure, geology) => {
    setState({
      ...state,
      btnOverviewActive: overview,
      btnStructureActive: structure,
      btnGeologyActive: geology,
    });
  };

  const renderImage = () => {
    return EarthImg ? (
      <EarthPlanet src={state.planetImg} alt='Image of planet earth' />
    ) : (
      <EarthPlanet
        src={state.planetImg}
        alt='Image of planet earth and its structure'
      />
    );
  };

  const btnOverviewActiveHandler = () => {
    setActiveButton(true, false, false);
    setState({
      ...state,
      content: APIData[2].overview.content,
      planetUrl: APIData[2].overview.source,
      planetImg: EarthImg,
      visibleGeo: false,
    });
  };

  const btnStructureActiveHandler = () => {
    setActiveButton(false, true, false);
    setState({
      ...state,
      content: APIData[2].structure.content,
      planetUrl: APIData[2].structure.source,
      planetImg: EarthInternalImg,
      visibleGeo: false,
    });
  };

  const btnGeologyActiveHandler = () => {
    setActiveButton(false, false, true);
    setState({
      ...state,
      content: APIData[2].geology.content,
      planetUrl: APIData[2].overview.source,
      planetImg: EarthImg,
      visibleGeo: true,
    });
  };

  return (
    <MainWrapper>
      <MainSection>
        <EarthContainer>
          {renderImage()}
          <EarthGeology
            visibleGeo={state.visibleGeo}
            src={EarthGeoImg}
            alt='Image of planet earth and geology'
          />
        </EarthContainer>
        <PlanetContentContainer>
          <Heading>{APIData[2].name}</Heading>
          <PlanetContent content={state.content}>{state.content}</PlanetContent>
          <WikiLink
            url={`${state.planetUrl}`}
            ariaLabel='Link to Wikipedia article for Earth'
          />
        </PlanetContentContainer>
        <ContentNavigationContainer>
          <EarthOverviewBtn
            btnOverviewActiveHandler={btnOverviewActiveHandler}
            active={state.btnOverviewActive}
          />
          <EarthInternalStructureBtn
            btnStructureActiveHandler={btnStructureActiveHandler}
            active={state.btnStructureActive}
          />
          <EarthSurfaceGeologyBtn
            btnGeologyActiveHandler={btnGeologyActiveHandler}
            active={state.btnGeologyActive}
          />
        </ContentNavigationContainer>
        <PlanetFactsContainer>
          {/* Boshqa kod... */}
        </PlanetFactsContainer>
      </MainSection>
    </MainWrapper>
  );
};

export default Earth;
