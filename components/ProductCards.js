import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

export default function ProductCard({ productObj }) {
  return (
    <Card>
      <Card.Header>
        {productObj.title}
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Sold by: {productObj.seller_id.first_name} {productObj.seller_id.last_name}
        </Card.Text>
        <Card.Text>
          {productObj.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  productObj: PropTypes.shape({
    id: PropTypes.number,
    seller_id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.string,
    categoryId: PropTypes.number,
    dateAdded: PropTypes.string,
  }).isRequired,
};
