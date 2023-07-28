import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../api/productData';
import ProductCard from '../../components/ProductCards';

export default function AllProductsPage() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    getAllProducts().then(setProducts);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div
      className="my-2 d-flex justify-content-center flex-wrap"
    >
      {products.map((product) => (
        <ProductCard productObj={product} key={product.id} />
      ))}
    </div>
  );
}
