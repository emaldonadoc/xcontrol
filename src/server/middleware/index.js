
const controllers = {};

const notFoundHandler = (req, res) => {
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify({ message: 'path not found' }));
  res.end();
}

const compose = (registerPaths) =>
  (req, res) => {
    if (registerPaths[req.url]) {
      return registerPaths[req.url].call(this, req, res);
    }
    return notFoundHandler.call(this, req, res);
  }


const Middleware = () => ({
  build: () => {
    return compose(controllers);
  },

  registerController: ({ path, handler }) => {
    controllers[path] = handler;
  }
});

export default Middleware();

