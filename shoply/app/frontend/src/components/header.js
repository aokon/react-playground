import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>About</li>
          <li>Contact</li>
          <li>Your Cart</li>
        </ul>
      </nav>
    </header>
  );
}
