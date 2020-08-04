import express from 'express';

const app = express();
const users = [
  { name: 'Diego', age: 25 },
  { name: 'Vini', age: 21 },
];

app.get('/users', (request, response) => {
  return response.json(users);
});

app.listen(3333);
