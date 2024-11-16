import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">AINA</h1>
      <Link to="/products" className="text-lg">Products</Link>
    </nav>
  );
}

export default Navbar;
