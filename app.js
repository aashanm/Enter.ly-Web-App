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
 var q = 'SELECT COUNT(*) as count FROM users';
 connection.query(q, function (error, results) {
 if (error) throw error;
 var msg = "We have " + results[0].count + " users";
 res.send(msg);
 });
});
 
app.listen(8080, function () {
 console.log('App listening on port 8080!');
});
 
connection.end();
