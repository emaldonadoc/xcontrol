import { startServer } from './server';
import { initializeSocket } from './server/socket';


console.log('initialize control application');
startServer();
initializeSocket();
