import React from 'react';
import Header from '~/components/Header/Header';
import Meta from '~/components/Meta/Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: #fff;
  color: ${props => props.theme.black};
`;

const InnerView = styled.div`
  max-width: ${props => props.theme.maxWidth};
  padding: 2rem;
  margin: 0 auto;
`;

const Page = props => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <Meta />
      <Header />
      <InnerView>
        {props.children}
      </InnerView>
    </StyledPage>
  </ThemeProvider>
);

export default Page;

