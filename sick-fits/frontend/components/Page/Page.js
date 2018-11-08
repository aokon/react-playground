import React from 'react';
import Header from '~/components/Header/Header';

const Page = props => (
  <div className="page">
    <Header />
    {props.children}
  </div>
);

export default Page;

