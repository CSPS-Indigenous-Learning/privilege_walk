var fs = require('fs');
var express = require("express");
var app = express();

var msg = "sessions.json updated";
const isServerlessEnvironment = process.env.ON_VERCEL=="true";

if(isServerlessEnvironment){
  app.use(function(req, res, next){
    var content = req.query.content || '{ "participant1": { "questionAt": 3, "score": 7 }, "participant2": { "questionAt": 13, "score": -6 }, "participant3": { "questionAt": 13, "score": 0 } }';

    try {
      fs.writeFileSync("/tmp/sessions.json", content);
    } catch(err) {
      msg = err;
      console.error(err);
    }

    res.send(msg);

    next();
  });
}
else{
  app.use("/en/api/write", function(req, res, next){
    var content = req.query.content || '{ "participant1": { "questionAt": 3, "score": 7 }, "participant2": { "questionAt": 13, "score": -6 }, "participant3": { "questionAt": 13, "score": 0 } }';

    try {
      fs.writeFileSync("static/sessions.json", content);
    } catch(err) {
      msg = err;
      console.error(err);
    }

    res.send(msg);

    next();
  });
}

module.exports = app
