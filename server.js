const express = require("express");

var body_parser = require("./body_parser");
var template_engine = require("./template_engines");
var validator = require("./validator");
var http_axios_errors = require("./http_axios_errors");
var { cors, corsOptions } = require("./cors");
var lodash_os_path = require("./lodash_os_path");
var url_data = require("./url_data");
var fakerjs = require("./fakerjs");
var events = require("./event");
var fs = require("fs");

const port = 3000;
const app = express();

// View Engine Setup
// app.set("views", path.join(__dirname, "/template_engines/pug"));
// app.set("view engine", "pug");

// app.use(cors(corsOptions));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(express.text());

// Parse multipart
// app.use(
// formidable({
//   encoding: "utf-8",
//   uploadDir: path.join(__dirname, "public"),
//   multiples: true,
//   keepExtensions: true, // req.files to be arrays of files
// })
// );

app.use("/events", events);

app.listen(port, () => {
  console.log("listening on port: ", port);
});
