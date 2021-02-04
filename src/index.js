import { startServer } from './server';
import { initializeSocket } from './socket';


console.log('initialize control application');
startServer();
initializeSocket();
