var fs = require('fs');
var express = require("express");
var app = express();

var msg = "sessions.json updated";

app.use(function(req, res, next){
  var content = req.query.content || '{ "participant1": { "questionAt": 3, "score": 7 }, "participant2": { "questionAt": 13, "score": -6 }, "participant3": { "questionAt": 13, "score": 0 } }';

  /*fs.writeFileSync('static/sessions.json', content, function (err) {
    if (err) {
      msg = "There was an error";
      console.log(err);
    }
    else{
      msg = "It worked";
      console.log('sessions.json updated');
    }
  });*/

  try {
    fs.writeFileSync('sessions.json', content);
  } catch(err) {
    msg = error;
    console.error(err);
  }

  res.send(msg);

  //next();
});

module.exports = app
