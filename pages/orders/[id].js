import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleOrder } from '../../api/orderData';
import ProductCard from '../../components/ProductCards';

export default function OrderDetailsPage() {
  const [orderDetails, setOrderDetails] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getOrderDetails = () => {
      getSingleOrder(id).then(setOrderDetails);
      console.warn(orderDetails);
    };

    getOrderDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="text-center d-flex justify-content-center flex-column">
      <h3>Order # {id}</h3>
      <p className="d-flex flex-wrap">
        {orderDetails.products && orderDetails.products.length > 0 ? (
          orderDetails.products.map((product) => (
            <ProductCard key={product.id} productObj={product.product_id} />
          ))
        ) : (
          'There&apos;s nothing here!'
        )}
      </p>
    </div>
  );
}
