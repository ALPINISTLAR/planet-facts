import React from 'react';
import styled from 'styled-components';

const GeologyImg = styled.img`
  width: 16.3rem;
  height: 19.9rem;
  position: absolute;
  top: 22.5rem;
  left: 6.4rem;
  display: ${(props) => (props.visible ? 'block' : 'none')};

  @media screen and (max-width: 720px) {
    width: 8.3rem;
    height: 9.9rem;
    top: 11rem;
    left: 3rem;
  }
`;

const PlanetGeology = ({ className, src, visibleGeo, alt }) => {
  return (
    <GeologyImg
      className={className}
      visible={visibleGeo}
      src={src}
      alt={alt}
    />
  );
};

export default PlanetGeology;