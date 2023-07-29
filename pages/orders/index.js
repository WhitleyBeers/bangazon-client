import React, { useEffect, useState } from 'react';
import { useAuth } from '../../utils/context/authContext';
import { getSellerOrders, getUserOrders } from '../../api/orderData';
import OrderCard from '../../components/OrderCard';

export default function OrderHistoryPage() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [sales, setSales] = useState([]);

  const getMyOrders = () => {
    getUserOrders(user.id).then(setOrders);
    getSellerOrders(user.id).then(setSales);
  };

  useEffect(() => {
    getMyOrders();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, user);

  return (
    <>
      <div className="text-center d-flex justify-content-center flex-column mt-3">
        <h3>My Orders</h3>
        {orders.map((order) => (
          <OrderCard key={order.id} orderObj={order} />
        ))}
      </div>
      <div className="text-center d-flex justify-content-center flex-column mt-3">
        <h3>My Sales</h3>
        {sales.map((sale) => (
          <OrderCard key={sale.id} orderObj={sale} />
        ))}
      </div>
    </>
  );
}
