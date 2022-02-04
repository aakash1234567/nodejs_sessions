// https://www.geeksforgeeks.org/how-to-send-email-with-nodemailer-using-gmail-account-in-node-js/
// https://support.google.com/accounts/answer/185833?p=InvalidSecondFactor&visit_id=637795652372344751-3145438042&rd=1

var express = require("express");
var router = express.Router();
const nodemailer = require("nodemailer");

router.get("/", async (req, res) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false, // true for 465, false for other ports
    auth: {
      user: "mail Id",
      pass: "App password", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "aakashkhandelwal56@gmail.com", // sender address
    to: "aakashkhandelwal56@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
});

module.exports = router;
