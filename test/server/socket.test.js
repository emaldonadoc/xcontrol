import io from 'socket.io';
import { initializeSocket } from 'app/server/socket';

jest.mock('socket.io');

describe('socket', () => {

  it('should create socket attaching http server', () => {

    const ws = {
      on: jest.fn(),
    };
    const of = jest.fn().mockReturnValue(ws);
    const socket = { of };
    const http = {};

    io.mockReturnValue(socket);

    initializeSocket(http)

    expect(io).toHaveBeenCalledWith(http);
    expect(of).toHaveBeenCalledWith('/ws');
    expect(ws.on).toHaveBeenCalledWith('connection',  expect.any(Function));

  });
});