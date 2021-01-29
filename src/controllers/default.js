
export const config = {
  path: '/',
  handler: (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ message: 'hello word' }));
    res.end();
  }
};