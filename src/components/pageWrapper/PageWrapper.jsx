import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.screenSize.desktop};
  position: relative;
`;

const PageWrapper = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default PageWrapper;