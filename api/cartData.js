import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const addToCart = (id, orderId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/products/${id}/addtocart`, {
    method: 'POST',
    body: JSON.stringify(orderId),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => resolve(response.json()))
    .catch(reject);
});

const deleteFromCart = (id, orderId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/products/${id}/deletefromcart`, {
    method: 'DELETE',
    Authorization: `${orderId}`,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

export { addToCart, deleteFromCart };
