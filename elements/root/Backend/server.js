const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "kris7504",
    database: "root_test"
})

app.get('/', (re, res) => {
    return res.json("From backend side");
})

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })

})

app.listen(8090, () => {
    console.log(`Server running on http://localhost:${8090}`);
});