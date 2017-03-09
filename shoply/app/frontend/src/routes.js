import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import LandingView from './components/landing_view';
import AboutView from './components/about_view';
import ContactView from './components/contact_view';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingView} />
    <Route path="about" component={AboutView} />
    <Route path="contact" component={ContactView} />
  </Route>
);
