import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { getSingleProduct } from '../../api/productData';
import { createOrder, getOpenOrder } from '../../api/orderData';
import { useAuth } from '../../utils/context/authContext';
import { addToCart } from '../../api/cartData';

export default function ProductView() {
  const router = useRouter();
  const { user } = useAuth();
  const { id } = router.query;
  const [product, setProduct] = useState({});
  const [order, setOrder] = useState({});

  const getProductDetails = () => {
    getSingleProduct(id).then(setProduct);
    getOpenOrder(user.id).then((data) => {
      if (data) {
        setOrder(data);
      } else {
        createOrder(user.id).then(setOrder);
      }
    });
  };

  const cartButton = () => {
    const payload = {
      orderId: order.id,
    };
    addToCart(id, payload).then(window.alert('Added to cart'));
  };

  useEffect(() => {
    getProductDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="mt-2">
      <h3>{product.title}</h3>
      <h5 className="fst-italic">{product.description}</h5>
      <h6>${product.price} each</h6>
      <Button variant="success" onClick={() => cartButton()}>Add to cart</Button>
      <hr />
      <p className="text-muted">
        {product.label}
      </p>
      <p className="text-muted">Quantity available: {product.quantity}</p>
      <p>Sold by: {product.firstName} {product.lastName}</p>
      <Button onClick={() => router.push(`/sellers/${product.sellerId}`)}>Visit Store</Button>
    </div>
  );
}
