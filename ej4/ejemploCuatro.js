const http = require('http');

const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Primer servidor HTTP en NodeJS');
});

server.listen(port, host, () => {
  console.log(`Servidor iniciado en http://${host}:${port}`);
});