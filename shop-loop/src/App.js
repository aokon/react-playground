import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import ProductLanding from './pages/ProductLanding';

export default () => (
  <Router>
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
      <Route exact path="/" component={Home} />
      <Route exact path="/products/:id" component={ProductLanding} />
      <Route path="/about" component={About} />
      <Route path="/cart" component={Cart} />
    </div>
  </Router>
);
