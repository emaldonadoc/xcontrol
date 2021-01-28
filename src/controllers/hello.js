
export const config = {
  path: '/hello',
  handler: (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ message: 'aca andamos path' }));
    res.end();
  }
};

