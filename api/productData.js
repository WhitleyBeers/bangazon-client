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

const getSingleProduct = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/products/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const product = {
        ...data,
        label: data.category_id.label,
        firstName: data.seller_id.first_name,
        lastName: data.seller_id.last_name,
      };
      return product.then(resolve(product));
    })
    .catch(reject);
});

export { getAllProducts, getSingleProduct };
