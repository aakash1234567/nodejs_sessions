// https://www.npmjs.com/package/validatorjs
// https://blog.logrocket.com/how-to-handle-data-validation-in-node-using-validatorjs/
var express = require("express");
var router = express.Router();
let Validator = require("validatorjs");

router.route("/").get(function (req, res) {
  const data = {
    ...req.query,
    age: parseInt(req.query?.age) || 20,
  };
  console.log(data);
  let rules = {
    name: "required|string",
    email: "email",
    age: "min:18",
  };

  let validation = new Validator(data, rules);
  if (validation.passes()) {
    res.status(200).send({ passed: true });
  } else {
    res.status(400).send({ passed: false });
  }
});
module.exports = router;

// http://localhost:3000/validator?name=aakash&age=30
