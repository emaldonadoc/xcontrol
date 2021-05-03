import { isLock } from '../utils/SOUtils';


export const config = {
  path: '/status',
  handler: (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ deviceLock: isLock() }));
    res.end();
  }
};

