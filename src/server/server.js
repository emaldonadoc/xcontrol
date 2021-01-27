import http from 'http';

const hostname = '127.0.0.1';
const port =  6660

export const startServer = () => {
  const server = http.createServer();

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}