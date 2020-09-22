var fs = require('fs');
var express = require("express");
var app = express();

var content = '{ "participant1": { "questionAt": 2, "score": 8 }, "participant2": { "questionAt": 11, "score": -5 }, "participant3": { "questionAt": 13, "score": 0 } }';

app.get("/", function(req, res){
  var content = req.query.content || '{ "participant1": { "questionAt": 3, "score": 7 }, "participant2": { "questionAt": 10, "score": -3 }, "participant3": { "questionAt": 13, "score": 0 } }';

  fs.writeFile('static/sessions.json', content, function (err) {
    if (err) {
      return console.log(err);
    }
    else{
      console.log(res.statusCode);

      res.status(200);
      console.log(req.path)
      console.log('sessions.json updated');
    }
  });
  res.send("sessions.json updated");
});

module.exports = {
  path: "/en/api/write",
  handler: app
}
