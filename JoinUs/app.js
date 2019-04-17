const express = require('express')
const faker = require('faker')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()

const port = 4000

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'join_us',
    password: 'password'
})

app.get('/', (req, res) => {
    const query = 'SELECT COUNT(*) AS count FROM users'
    // Count Users
    connection.query(query, (err, users) => {
        const count = users[0].count
        // res.send('We have ' + count + '')
        res.render('home', {data: count})
    })
})

app.post('/register', (req, res) => {
    const person = {
        email: req.body.email
    }
    var q = 'INSERT INTO users SET ?';

    connection.query(q, person, function (err, result) {
        res.send('Thank you')
    });

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))