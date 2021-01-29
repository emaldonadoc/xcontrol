import http from 'http';
import middleware from './middleware'
import controllers from '../controllers';

const port = 6660;
const host = 'localhost'

const registerControllers = () => {
  for (let name in controllers) {
    console.log('Registering path', name);
    middleware.registerController(controllers[name].config)
  }
  return http.createServer(middleware.build());
}

export const startServer = () => {
  registerControllers()
    .listen(port, host, () => {
      console.log(`Server running at  http://${host}:${port}`);
    });
}
