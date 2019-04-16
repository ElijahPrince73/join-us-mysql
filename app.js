const faker = require('faker')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'join_us',
    password: 'password'
})

var data = [];
for (var i = 0; i < 500; i++) {
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}


var q = 'INSERT INTO users (email, create_ad) VALUES ?';

connection.query(q, [data], function (err, result) {
    console.log(err);
    console.log(result);
});

connection.end();
