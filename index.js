var express = require('express')
var app = express()
var path = require("path")
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(__dirname));
var fs = require("fs")
var request = require("superagent")
var randomNumber = Math.floor((Math.random() * 21) + 1)

function wordMatch(){
  return knex.raw('SELECT FROM "todos" WHERE id=' + id + ';')
}

app.listen(3000, function () {
  console.log('listening on port 3000!');
});

app.get("/v1/home",function(req,res){
  res.send("HELLO")
});
