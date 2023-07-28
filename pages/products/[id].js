import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { getSingleProduct } from '../../api/productData';

export default function ProductView() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState({});

  const getProductDetails = () => {
    getSingleProduct(id).then(setProduct);
  };

  useEffect(() => {
    getProductDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="mt-2">
      <h3>{product.title}</h3>
      <h5 className="fst-italic">{product.description}</h5>
      <h6>${product.price}</h6>
      <Button variant="success">Add to cart</Button>
      <hr />
      <p className="text-muted">
        {product.label}
      </p>
      <p className="text-muted">Quantity available: {product.quantity}</p>
      <p>Sold by: {product.firstName} {product.lastName}</p>
    </div>
  );
}
