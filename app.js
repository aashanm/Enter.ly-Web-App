var faker = require('faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	password: 'password',
	database: 'enter_ly'
});

var q = 'SELECT COUNT(*) AS total FROM users';
connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results[0].total);
});

connection.end();