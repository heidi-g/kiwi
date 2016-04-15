#!/usr/bin/env node
var knexConfig = require('./knexfile')
var knex = require('knex')(knexConfig[process.env.NODE_ENV || "development"])

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
  var randomNumber = Math.floor((Math.random() * 22) + 1)
  return knex.raw('SELECT id,kiwiWord,expression FROM "kiwi" WHERE id=' + randomNumber + ';')
}

function logError (err) {
  console.log('Dang, we exploded like a bomb: ', err)
}

function closeDB () {
  knex.destroy()
}

app.listen(process.env.PORT || 3000, function () {
  console.log('listening on port 3000!');
});

// app.get("/",function(req,res){
//   res.render("index")
// });

app.get("/",function(req,res){
  wordMatch() //returns a Promise 1.
  .then(function(kiwiWords){ // save the callback 2.
    //executes kiwiWords function .4
    console.log(kiwiWords[0], "*************")
    res.render("index", kiwiWords[0] ) // renders the file with this data .5
  })

});// waits for data 3.

module.exports = app;
