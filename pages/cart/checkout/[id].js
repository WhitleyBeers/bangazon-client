import { useRouter } from 'next/router';
import React from 'react';

export default function OrderConfirmationPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="text-center mt-3">
      <h2>Order #{id} confirmed!</h2>
      <h4>Please keep your confirmation number for your records.</h4>
    </div>
  );
}
