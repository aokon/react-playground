import React from 'react';
import Header from '~/components/Header/Header';
import Meta from '~/components/Meta/Meta';
import styled from 'styled-components';

const StyledPage = styled.div`
  background: #fff;
  color: #000;
`;

const InnerView = styled.div`
  max-width: 1000px;
  padding: 2rem;
  margin: 0 auto;
`;

const Page = props => (
  <StyledPage>
    <Meta />
    <Header />
    <InnerView>
      {props.children}
    </InnerView>
  </StyledPage>
);

export default Page;

