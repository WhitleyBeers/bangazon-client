import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getUserOrders = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${id}`,
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleOrder = (orderId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/orders/${orderId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const order = {
        ...data,
        products: data.products.map((orderProduct) => orderProduct.product.id),
      };
      resolve(order);
    })
    .catch(reject);
});

const getOpenOrder = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/users/${id}/getorder`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createOrder = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${id}`,
    },
  })
    .then((response) => resolve(response.json()))
    .catch(reject);
});

const updateOrder = (orderId, payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/orders/${orderId}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

export {
  getUserOrders,
  getSingleOrder,
  getOpenOrder,
  createOrder,
  updateOrder,
};
