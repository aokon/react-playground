import React from 'react';
import Header from '~/components/Header/Header';
import Meta from '~/components/Meta/Meta';

const Page = props => (
  <div className="page">
    <Meta />
    <Header />
    {props.children}
  </div>
);

export default Page;

