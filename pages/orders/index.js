import React, { useEffect, useState } from 'react';
import { useAuth } from '../../utils/context/authContext';
import { getUserOrders } from '../../api/orderData';
import OrderCard from '../../components/OrderCard';

export default function OrderHistoryPage() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  const getMyOrders = () => {
    getUserOrders(user.id).then(setOrders);
  };

  useEffect(() => {
    getMyOrders();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, user);

  return (
    <div className="text-center d-flex justify-content-center flex-column">
      {orders.map((order) => (
        <OrderCard key={order.id} orderObj={order} />
      ))}
    </div>
  );
}
