import React from 'react';
import { Link } from 'react-router-dom';

function ProductsPage() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-8">Products</h1>
      <div className="flex justify-center">
        <Link to="/products/FILMBASE-0808-Plus" className="p-4 m-4 border rounded-lg shadow-md">
          Switchable Glass
        </Link>
        <Link to="/products/led-light" className="p-4 m-4 border rounded-lg shadow-md">
          LED Light
        </Link>
      </div>
    </div>
  );
}

export default ProductsPage;
