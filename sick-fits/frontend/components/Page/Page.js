import React from 'react';
// TODO: add support for server side rendering
// https://www.styled-components.com/docs/advanced#server-side-rendering
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from '~/components/Header/Header';
import Meta from '~/components/Meta/Meta';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
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

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  html {
    font-size: 10px;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.black};
  }
`;

const Page = props => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <React.Fragment>
        <GlobalStyles />
      </React.Fragment>
      <Meta />
      <Header />
      <InnerView>
        {props.children}
      </InnerView>
    </StyledPage>
  </ThemeProvider>
);

export default Page;

