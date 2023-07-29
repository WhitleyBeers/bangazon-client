import React, { useEffect, useState } from 'react';
import CheckoutForm from '../../../components/CheckoutForm';
import { getOpenOrder } from '../../../api/orderData';
import { useAuth } from '../../../utils/context/authContext';

export default function CheckoutPage() {
  const [order, setOrder] = useState({});
  const { user } = useAuth();

  const getOrder = () => {
    getOpenOrder(user.id).then(setOrder);
  };

  useEffect(() => {
    getOrder();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <CheckoutForm orderObj={order} />
  );
}
