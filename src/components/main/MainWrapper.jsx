import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MainWrapper;