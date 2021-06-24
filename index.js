var express = require("express");
var app = express();
app.post("/test", (req) => {
    var message = req.body.message;
    var otp = req.body.otp;
    console.log(1);
    console.log(message);
    console.log(2);
});
