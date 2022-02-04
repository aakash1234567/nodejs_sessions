// https://expressjs.com/en/resources/middleware/cors.html

var whitelist = ["localhost:3000", "example2.com"];
var methods = ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"];

var corsOptions = (req, callback) => {
  let corsOptions;
  let isDomainAllowed = whitelist.indexOf(req.headers.host) !== -1;
  let isMethodAllowed = methods.indexOf(req.method) !== -1;

  if (isDomainAllowed && isMethodAllowed) {
    // Enable CORS for this request
    corsOptions = { origin: true };
    callback(null, true);
  } else {
    // Disable CORS for this request
    corsOptions = { origin: false };
    callback(new Error("Not allowed by CORS"));
  }
};

module.exports = corsOptions;
