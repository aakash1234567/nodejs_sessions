var express = require("express");
var lodash = require("lodash");
var os = require("os");
var path = require("path");

var router = express.Router();

router.get("/lodash", function (req, res) {
  const data = {
    name: "myName",
    age: 23,
    impdata: {
      email: "myemail",
    },
  };
  const email = lodash.get(data, "impdata.email", "Not Found");
  res.send({ email, url: "https://lodash.com/docs/4.17.15" });
});

router.get("/os", function (req, res) {
  const temp = os.cpus();
  res.send({ temp, url: "https://nodejs.org/api/os.html" });
});

router.get("/path", function (req, res) {
  const temp = path.extname("index.html");
  res.send({ temp, url: "https://nodejs.org/api/path.html" });
});
module.exports = router;
