const faker = require('faker')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'join_us',
    password: 'password'
})

const q = 'SELECT 1 + 5 AS answer';

connection.query(q, function(error, results, fields)  {
    console.log(results[0]);
})

connection.end()
