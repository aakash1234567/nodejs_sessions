// https://expressjs.com/en/resources/middleware/cors.html

var cors = require("cors");
var whitelist = ["http://localhost:3000", "http://example2.com"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "POST,PUT",
};

module.exports = { cors, corsOptions };
