var express = require("express");
var app = express();
app.listen(8085, () => {
    console.log("Server running on port 8085");
   });
app.post("/test", (req,res) => {
    var message = req.body;
    console.log(1);
    console.log(message);
    console.log(2);
    res.json({a:message})
});
