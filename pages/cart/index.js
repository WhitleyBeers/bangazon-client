import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import { getOpenOrder } from '../../api/orderData';
// eslint-disable-next-line import/no-unresolved
import CartProductCard from '../../components/cartProductCard';

export default function CartPage() {
  const { user } = useAuth();
  const [order, setOrder] = useState({});
  const router = useRouter();

  useEffect(() => {
    const getMyOrder = () => {
      getOpenOrder(user.id).then(setOrder);
      console.warn(order);
    };

    getMyOrder();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const getTotalPrice = () => {
    if (order.products && order.products.length > 0) {
      return order.products.reduce((total, product) => {
        const productPrice = parseFloat(product.product_id.price);
        return total + productPrice;
      }, 0);
    }
    return 0;
  };

  return (
    <div className="text-center d-flex justify-content-center flex-column">
      <h3>My Cart</h3>
      <hr />
      <p className="d-flex flex-wrap">
        {order.products && order.products.length > 0 ? (
          order.products.map((product) => (
            <CartProductCard className="d-flex flex-wrap" key={product.id} cartObj={product.product_id} />
          ))
        ) : (
          'No products in cart'
        )}
      </p>
      <h4>TOTAL: ${getTotalPrice().toFixed(2)}</h4>
      <p>
        <Button variant="success" onClick={() => router.push('/cart/checkout')}>Check out</Button>
      </p>
    </div>
  );
}
