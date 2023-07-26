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
        const productArray = data.sort((a, b) => b.date_added.localeCompare(a.date_added));
        resolve(productArray);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export default getAllProducts;
