import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getProductsBySeller } from '../../api/productData';
import ProductCard from '../../components/ProductCards';
import { getSingleUser } from '../../api/userData';

export default function SellerStore() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});
  const router = useRouter();
  const { id } = router.query;

  const getSellerProducts = () => {
    getProductsBySeller(id).then(setProducts);
    getSingleUser(id).then(setUser);
  };

  useEffect(() => {
    getSellerProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="my-2 d-flex justify-content-center flex-wrap">
      <h2>{user.username}&apos;s Store</h2>
      <hr />
      <section className="my-2 d-flex justify-content-center flex-wrap">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} productObj={product} />
          ))
        ) : <h4>No products available</h4>}
      </section>
    </div>
  );
}
