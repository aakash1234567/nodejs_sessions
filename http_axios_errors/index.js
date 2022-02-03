// https://www.w3schools.com/nodejs/nodejs_http.asp
const axios = require("axios");
var express = require("express");
const createError = require("http-errors");

var url = require("url");

var router = express.Router();

router.get("/http", function (req, res) {
  res.send({
    url: "https://www.w3schools.com/nodejs/nodejs_http.asp",
  });
});

router.get("/url", function (req, res) {
  var adr = "http://localhost:8080/default.htm?year=2017&month=february";
  var q = url.parse(adr, true);

  console.log(q.host); //returns 'localhost:8080'
  console.log(q.pathname); //returns '/default.htm'
  console.log(q.search); //returns '?year=2017&month=february'

  var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
  console.log(qdata.month); //returns 'february'
  res.send({
    url: "https://nodejs.org/api/url.html",
  });
});

router.get("/axios", async (req, res) => {
  var response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  res.send({
    data: response.data,
    url: "https://blog.openreplay.com/how-to-make-http-requests-with-axios",
  });
});
router.get("/errors", function (req, res) {
  res.send(
    createError(
      502,
      "https://www.geeksforgeeks.org/generating-errors-using-http-errors-module-in-node-js/"
    )
  );
});
module.exports = router;
