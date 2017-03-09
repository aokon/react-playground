import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import LandingView from './components/landing_view';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingView} />
  </Route>
);
