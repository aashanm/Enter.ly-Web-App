var mysql = require('mysql');
var faker = require('faker');
var express = require('express');
var app = express();

 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'enter_ly'
});
  
app.get("/", function(req, res){
 res.send("HELLO FROM OUR WEB APP!");
});
 
app.listen(8080, function () {
 console.log('App listening on port 8080!');
});
 
connection.end();
