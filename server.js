var express = require('express');
var app = express();
const path = require('path');
const port = 3000;

app.use(express.static('./build'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(port);
console.log("listening on " + port)
