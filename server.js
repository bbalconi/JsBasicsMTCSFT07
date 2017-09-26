var express = require("express");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json({ type: 'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'))
app.use(function(req, res, next){
  res.setHeader('Content-Type', 'application/json');
  next();
});
var allNames = ['Moby', 'Burger']

<<<<<<< HEAD
/* serves main page */
app.get("/", function(req, res) {
  res.sendfile('html-practice.html')
});
=======
 /* serves main page */
 app.get("/", function(req, res) {
    res.sendfile('index.html')
 });
>>>>>>> 6986b418393a25f0c5e7fcbcdce4ba39a45298fe

app.get("/names", function(req, res){
  res.json(allNames);
});

app.post("/names", function(req, res){
  console.log(req.body.name);
  allNames.push(req.body.name)
  res.json('body received ' + req.body.name);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

