import { lock } from '../utils/SOUtils';

export const config = {
  path: '/lock',
  handler: (req, res) => {
    lock();
    res.writeHead(204);
    res.end();
  }
};

