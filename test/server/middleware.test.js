import middleware from 'app/server/middleware';

describe('Middleware', () => {

  const mockControllers = {
    default: { path: '/', handler: jest.fn() },
  };


  it('should register and compose controllers', () => {
    expect(() => middleware.registerController(mockControllers.default)).not.toThrow(Error);
  });
});