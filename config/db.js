'user strict';

const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'football_stories'
});
dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});
module.exports = dbConn;