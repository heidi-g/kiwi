#!/usr/bin/env node
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: __dirname + '/dev.sqlite3'
  },
  useNullAsDefault: true
})

var express = require('express')
var app = express()
var path = require("path")
app.set('views', path.join());
app.set('view engine', 'hbs');
app.use(express.static(__dirname));
var fs = require("fs")
var request = require("superagent")


//-----select by ID -----
function wordMatch(){
  var randomNumber = Math.floor((Math.random() * 21) + 1)
  return knex.raw('SELECT id,kiwiWord,expression FROM "kiwi" WHERE id=' + randomNumber + ';')
}

function logError (err) {
  console.log('Dang, we exploded like a bomb: ', err)
}

function closeDB () {
  knex.destroy()
}

app.listen(3000, function () {
  console.log('listening on port 3000!');
});

app.get("/",function(req,res){
  res.render("index")
});

app.get("/home",function(){
  res.render("index", wordMatch())
});
