/*****************************CORS*********************************/
const enableCORS = function(req, res, next) {
  if (!process.env.DISABLE_XORIGIN) {
    const allowedOrigins = ['http://localhost:8081', 'http://localhost:8080', 'http://localhost:8082'];
    let origin = req.headers.origin;
    if(!process.env.XORIGIN_RESTRICT || allowedOrigins.indexOf(origin) > -1) {
      let now = new Date().toLocaleString();
      console.log(`[${now}] ${req.method} ${req.path} - ${req.ip}`);
      res.set({
        "Access-Control-Allow-Origin" : origin,
        "Access-Control-Allow-Methods" : "GET, PUT, PATCH, POST, DELETE, OPTIONS",
        "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"
      });
    }
  }
  next();
};
/*****************************CORS*********************************/
module.exports = enableCORS;
