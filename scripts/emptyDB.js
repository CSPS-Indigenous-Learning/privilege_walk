const fs = require("fs");

fs.writeFile("static/sessions.json", "{}", function (err) {
  if (err) return console.log(err);
  console.log('Error!');
});