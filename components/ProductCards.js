import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function ProductCard({ productObj }) {
  const router = useRouter();
  return (
    <Card
      className="text-center"
      style={{
        margin: '10px',
        width: '16rem',
      }}
    >
      <Card.Header className="fw-bolder">
        {productObj.title}
      </Card.Header>
      <Card.Body>
        {productObj.seller_id.first_name ? (
          <Card.Text
            className="d-flex align-items-center justify-content-center"
            style={{
              height: '5px',
            }}
          >
            Sold by: {productObj.seller_id.first_name} {productObj.seller_id.last_name}
          </Card.Text>
        ) : (
          ''
        )}

        <hr />
        <Card.Text
          style={{
            height: '50px',
          }}
        >
          {productObj.description}
        </Card.Text>
        <Card.Text className="fw-bolder">
          {productObj.price}
        </Card.Text>
        <Card.Text>
          <Button variant="success" onClick={() => router.push(`/products/${productObj.id}`)}>
            View product
          </Button>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">Added {productObj.date_added}</Card.Footer>
    </Card>
  );
}

ProductCard.propTypes = {
  productObj: PropTypes.shape({
    id: PropTypes.number,
    seller_id: PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      id: PropTypes.number,
    }),
    title: PropTypes.string,
    description: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.string,
    category_id: PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
    }),
    date_added: PropTypes.string,
  }).isRequired,
};
