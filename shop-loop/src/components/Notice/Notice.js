import React from 'react';

export default ({ type, message }) => (
  <div className={['notice', type].join(' ')}>
    <strong>Something went wrong</strong>
    <div>{message}</div>
  </div>
);
