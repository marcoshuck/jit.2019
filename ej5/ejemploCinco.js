const express = require('express');

const host = 'localhost';
const port = 3000;

const app = new express();

app.get('/', (req, res) => {
  res.status(200).send('Hola, mundo!');
});

app.get('/hola/:name', (req, res) => {
  res.status(200).send(`Hola, ${req.params.name}`);
});

app.listen(port, host, () => {
  console.log(`Servidor iniciado con Express en http://${host}:${port}`);
});
