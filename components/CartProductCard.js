import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

export default function CartProductCard({ cartObj }) {
  return (
    <Card
      className="p-2 m-2"
      style={{
        width: '16rem',
      }}
    >
      <Card.Text
        style={{
          height: '40px',
        }}
      >
        {cartObj.title} ${cartObj.price}
      </Card.Text>
    </Card>
  );
}

CartProductCard.propTypes = {
  cartObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};
