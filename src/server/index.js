var http = require('http');

const hostname = '127.0.0.1';
const port =  6660

const paths = () => {
  console.log('creating listening paths');
}

export const startServer = () => {
  const server = http.createServer();

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}