import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'src/App.css';
import Navi from 'src/components/Navi';
import Home from 'src/pages/Home';
import About from 'src/pages/About';
import Cart from 'src/pages/Cart';
import ProductLanding from 'src/pages/ProductLanding';
import Checkout from 'src/pages/Checkout';

export default () => (
  <Router>
    <div className="App">
      <Navi />
      <Route exact path="/" component={Home} />
      <Route exact path="/products/:id" component={ProductLanding} />
      <Route path="/about" component={About} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
    </div>
  </Router>
);

