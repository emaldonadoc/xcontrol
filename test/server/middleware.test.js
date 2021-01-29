import middleware from 'app/server/middleware';

describe('Middleware', () => {

  const mockHandler = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ message: 'hello word' }));
    res.end();
  };

  const mockControllers = {
    default: { path: '/', handler: jest.fn(mockHandler) },
  };

  const req = {
    url: '/'
  };

  const res = {
    writeHead: jest.fn(),
    write: jest.fn(),
    end: jest.fn()
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should register controller', () => {
    expect(() => middleware.registerController(mockControllers.default)).not.toThrow(Error);
  });

  it('should compose controllers and call registered one', () => {
    middleware.registerController(mockControllers.default)
    const composed = middleware.build();

    composed(req, res);
    expect(mockControllers.default.handler).toHaveBeenCalled();
    expect(res.writeHead).toHaveBeenCalledWith(200, { 'Content-Type': 'application/json' });
    expect(res.write).toHaveBeenCalledWith("{\"message\":\"hello word\"}");
    expect(res.end).toHaveBeenCalled();
  });

  it('should call not found handler', () => {
    middleware.registerController(mockControllers.default)
    const composed = middleware.build();

    req.url = '/other'

    composed(req, res);
    expect(mockControllers.default.handler).not.toHaveBeenCalled();
    expect(res.writeHead).toHaveBeenCalledWith(404, { "Content-Type": "application/json" });
    expect(res.write).toHaveBeenCalledWith("{\"message\":\"path not found\"}");
    expect(res.end).toHaveBeenCalled();
  });

});
