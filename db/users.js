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

exports.findAppliedJobs = function(user_id, cb) {
    connection.query('SELECT job_id, job_title, location, date_created FROM job_posting INNER JOIN applied_jobs ON applied_jobs.job_id=job_posting.id where user_id = ?', user_id, function(error, rows) {
        return cb(null, rows);
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

exports.findListings = function(company_id, cb) {
    connection.query('select id, job_title, location, date_created from job_posting where company_id = ?', company_id, function(error, rows) {
        return cb(null, rows);
    })
}

exports.findUserSearches = function(user_id, cb)  {
  connection.query('select * from searches where user_id = ?', user_id, function(err, rows) {
    return cb(null, rows)
  })
}
