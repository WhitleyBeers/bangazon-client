import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getAllCategories = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/categories`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export default getAllCategories;
