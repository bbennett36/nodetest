var mysql = require('mysql');
var connection = mysql.createConnection({host: 'localhost', user: 'root', password: 'bennett', database: 'bootcamphire'});

exports.findByUsername = function(email, cb) {
    connection.query('select * from user where email = ?', email, function(error, rows) {
        //     //lat lng lat keyword (distance)
        return cb(null, rows[0]);
    })
}

exports.findById = function(id, cb) {
    connection.query('select * from user where id = ?', id, function(error, rows) {
        //     //lat lng lat keyword (distance)
        return cb(null, rows[0]);
    })
}

exports.findByCompanyUsername = function(email, cb) {
    connection.query('select * from company where email = ?', email, function(error, rows) {
        //     //lat lng lat keyword (distance)
        return cb(null, rows[0]);
    })
}

exports.findByCompanyId = function(id, cb) {
    connection.query('select * from company where id = ?', id, function(error, rows) {
        //     //lat lng lat keyword (distance)
        return cb(null, rows[0]);
    })
}
