import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getAllProducts = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const productArray = Object.values(data).sort((a, b) => new Date(b.registered_on) - new Date(a.registered_on));
        resolve(productArray);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export default getAllProducts;
