import http from 'http';
import middleware from 'app/server/middleware';

import { startServer } from 'app/server'


const listenFn = jest.fn();

jest.mock('http');

jest.mock('app/controllers', () => ({
  default: { path: 'default', handler: () => { } }
}));

jest.mock('app/server/middleware', () => ({
  registerController: jest.fn(),
  build: jest.fn()
}));

describe('Start server spec', () => {

  it('Should register controllers', () => {

    http.createServer.mockReturnValue({ listen: listenFn })

    startServer();

    expect(middleware.registerController).toHaveBeenCalled();
    expect(middleware.build).toHaveBeenCalled();
    expect(http.createServer).toHaveBeenCalled();
    expect(listenFn).toHaveBeenCalled();
  });
});