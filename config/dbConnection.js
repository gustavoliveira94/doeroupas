var mysql = require('mysql');

var connMySql = function() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'doeroupas'
    });
}

module.exports = function () {
    return connMySql;
}