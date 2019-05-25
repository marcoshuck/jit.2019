import express from 'express';

const app: express.Application = express();

app.get('/', (req, res) => {
  res.status(200).send('Hola, mundo!');
});

app.listen(3000, () => {
  console.log('Iniciando Express con TypeScript');
})