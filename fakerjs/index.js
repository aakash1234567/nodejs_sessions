// https://www.section.io/engineering-education/how-to-generate-fake-data-in-node-using-faker.js/
// https://fakerjs.dev/guide/#installation

var express = require("express");
var faker = require("@faker-js/faker");

var router = express.Router();

router.get("/name", function (req, res) {
  const randomName = faker.faker.name.findName();
  res.send(randomName);
});

module.exports = router;
