import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navi from './components/Navi';

import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import ProductLanding from './pages/ProductLanding';
import Checkout from './pages/Checkout/Checkout';

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
