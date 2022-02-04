var express = require("express");
let formidable = require("express-formidable");
let path = require("path");

var router = express.Router();

router.get("/query", function (req, res) {
  const name = req.query.name;
  res.send({
    name,
  });
});

router.get("/params/:name/:age", function (req, res) {
  console.log(req.params);
  res.send(req.params.name);
});

router.get(
  "/multipart",
  formidable({
    encoding: "utf-8",
    uploadDir: path.join(__dirname, "../public"),
    multiples: true,
    keepExtensions: true, // req.files to be arrays of files
  }),
  function (req, res) {
    console.log(req.fields);
    console.log(req.files);

    res.send({
      data: "done",
    });
  }
);

router.get("/urlencoded", function (req, res) {
  console.log(req.body);

  res.send({
    data: "ad",
  });
});

module.exports = router;
