import React from 'react';
import Link from 'next/link';

const Navi = () => (
  <ul>
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/sell">
        <a>Sell</a>
      </Link>
    </li>
  </ul>
);

export default Navi
