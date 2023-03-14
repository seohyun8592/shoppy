import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav>
      <Link to="/products">Products</Link>
      <Link to="/carts">cart</Link>
    </nav>
  );
}
