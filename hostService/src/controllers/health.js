export const config = {
  path: '/health',
  handler: (req, res) => {
    res.writeHead(204);
    res.end();
  }
};

