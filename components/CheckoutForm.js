import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { updateOrder } from '../api/orderData';

export default function CheckoutForm({ orderObj }) {
  const [formInput, setFormInput] = useState([]);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formInput };
    updateOrder(orderObj.id, payload).then(router.push(`/cart/checkout/${orderObj.id}`));
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-3">
      <h2>Checkout</h2>
      <FloatingLabel label="Payment Type">
        <Form.Select
          aria-label="Payment Type"
          name="paymentMethod"
          onChange={handleChange}
          className="mb-3"
          value={formInput.paymentMethod}
          required
        >
          <option value="">Choose a payment type</option>
          <option value="Credit">Credit</option>
          <option value="Debit">Debit</option>
          <option value="Gift Card">Gift Card</option>
          <option value="Apple Pay">Apple Pay</option>
          <option value="Google Pay">Google Pay</option>
        </Form.Select>
      </FloatingLabel>
      <Button type="submit" variant="primary">Submit order</Button>
    </Form>
  );
}

CheckoutForm.propTypes = {
  orderObj: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};
