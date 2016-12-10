exports.findByUsername = function(username, cb) {
    connection.query('select * from user where username = ?', username, function(error, rows) {
        //     //lat lng lat keyword (distance)
      console.log(rows, error)
        return cb(null, rows[0]);
    })
}

exports.findById = function(id, cb) {
    connection.query('select * from user where id = ?', id, function(error, rows) {
        //     //lat lng lat keyword (distance)
        return cb(null, rows[0]);
    })
}
