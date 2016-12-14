var mysql = require('mysql');
var connection = mysql.createConnection({host: 'localhost', user: 'root', password: 'bennett', database: 'bootcamphire'});


exports.findByUsername = function(username, cb) {
    connection.query('select * from user where username = ?', username, function(error, rows) {
        //     //lat lng lat keyword (distance)
        return cb(null, rows[0]);
    })
}

exports.findById = function(id, cb) {
    connection.query('select * from user where id = ?', id, function(error, rows) {
        //     //lat lng lat keyword (distance)
        return cb(null, rows[0]);
    })

// exports.createUser = function(user) {
//
// }
}
