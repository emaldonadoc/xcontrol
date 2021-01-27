import http from 'http';
import middleware  from './middleware'

const handler1 = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({message: 'hello word'}));
    res.end();  
}

const handler2 = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify({message: 'aca andamos path'}));
  res.end();  
}

const paths = middleware
  .registerController('/', handler1)
  .registerController('/hello', handler2)
  .build();

const server = http.createServer(paths)

const port = 6660;
const host = 'localhost'

export const startServer = () =>{
  server.listen(port, host,() => {
    console.log(`Server running at  http://${host}:${port}`);
  });
}
