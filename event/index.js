// https://nodejs.org/api/events.html

var express = require("express");
const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}

var router = express.Router();

const myEmitter = new MyEmitter();
myEmitter.on("event", () => {
  console.log("an event occurred!");
});

const delayedEmitter = new MyEmitter();
delayedEmitter.on("delayEvent", () => {
  console.log("delayed by 10 seconds!");
});

router.get("/", function (req, res) {
  myEmitter.emit("event");
  setTimeout(() => {
    delayedEmitter.emit("delayEvent");
  }, 7000);
  res.send("emitted");
});

module.exports = router;
