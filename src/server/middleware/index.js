
const controllers = [];

const wrapHandler = (path, cb) => 
(req, res, next) => {
   if (req.url === path) {
     cb(req, res);
   } else {
     next();
   }
};

const notFoundHandler = (req, res) => {
 res.writeHead(404, { 'Content-Type': 'application/json' });
 res.write({ message: 'path not found' });
 res.end();    
}

const compose = (registerPaths) => 
  (req, res) => {   
   let next = () => {
       notFoundHandler.call(this, req, res);
   };

   let i = registerPaths.length;
   while (i--) {
     let thisMiddleware = registerPaths[i];
     let nextMiddleware = next;
     next = () => { 
       thisMiddleware.call(this, req, res, nextMiddleware);
     }
   }
   return next();
 }


const Middleware = () => ({  

  build: () => {
    return compose(controllers);
  },

  registerController: (path, handler) => {
    controllers.push(wrapHandler(path, handler));
    return middlewareInstance;
  }
});

const middlewareInstance = Middleware();


export default middlewareInstance;  
  
