import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import LandingView from './components/views/landing';
import AboutView from './components/views/about';
import ContactView from './components/views/contact';
import CategoryView from './components/views/category';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LandingView} />
    <Route path="about" component={AboutView} />
    <Route path="contact" component={ContactView} />
    <Route path="category/:id" component={CategoryView} />
  </Route>
);
