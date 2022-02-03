// https://www.geeksforgeeks.org/body-parser-middleware-in-node-js/
// https://www.npmjs.com/package/body-parser

var express = require("express");
var router = express.Router();
const bodyparser = require("body-parser");

// Body-parser middleware
router.use(bodyparser.urlencoded({ extended: false }));
router.use(bodyparser.json());

router.get("/", function (req, res) {
  res.render("index");
});

router.post("/saveData", (req, res) => {
  console.log("Using Body-parser: ", req.body.email);
});

module.exports = router;
