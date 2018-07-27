import React from 'react';

export default ({ type, model }) => (
  <div className={['notice', type].join(' ')}>
    <strong>Something went wrong</strong>
    <div>{model.message}</div>
  </div>
);
