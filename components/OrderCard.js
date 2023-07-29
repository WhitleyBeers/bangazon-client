import { useRouter } from 'next/router';
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';

export default function OrderCard({ orderObj }) {
  const router = useRouter();

  return (
    <Card>
      <Card.Header>Order #{orderObj.id}</Card.Header>
      <Card.Body>
        <Card.Text>Paid with {orderObj.payment_method}</Card.Text>
        <Card.Text>
          <Button onClick={() => router.push(`/orders/${orderObj.id}`)}>
            View Order
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

OrderCard.propTypes = {
  orderObj: PropTypes.shape({
    id: PropTypes.number,
    payment_method: PropTypes.string,
  }).isRequired,
};
