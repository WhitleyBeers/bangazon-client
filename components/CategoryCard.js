import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

export default function CategoryCard({ productObj }) {
  return (
    <Card
      className="ps-2 text-primary"
      style={{
        margin: '10px',
        width: '14rem',
      }}
    >
      <Card.Link href={`/products/${productObj.id}`}>
        {productObj.title}
      </Card.Link>
    </Card>
  );
}

CategoryCard.propTypes = {
  productObj: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};
