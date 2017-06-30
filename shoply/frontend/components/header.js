import React from 'react'
import Link from 'next/link'

export default () => (
  <header>
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li>Your Cart</li>
      </ul>
    </nav>
  </header>
)
