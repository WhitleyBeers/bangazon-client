import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getUsers = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleUser = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/users/${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const deleteUser = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

export { getUsers, getSingleUser, deleteUser };
