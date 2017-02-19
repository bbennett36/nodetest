var mysql = require('mysql');
var connection = mysql.createConnection({host: 'localhost', user: 'root', password: 'bennett', database: 'bootcamphire'});

exports.getResultCount = function(lat, lng, keyword, radius, x, cb)  {
  connection.query('SELECT *, ( 3959 * acos (cos ( radians(?) )* cos( radians( lat ) )* cos( radians( lng ) - radians(?) )+ sin ( radians(?) )* sin( radians( lat ) ))) AS distance FROM job_posting where job_title like ? HAVING distance < ?', [
      lat,
      lng,
      lat,
      keyword,
      radius,
      x
  ], function(error, rows) {
      //     //lat lng lat keyword (distance)

      var count = rows.length;
      console.log(count)
      cb(null, x);

  });
}

exports.saveSearchQuery = function(query, location, cb) {

  var info = {
    query: keyword,
    location: location
  }

  connection.query('INSERT INTO searches set ?', info, function(err, result) {
    cb(null, result);

  })
}

// exports.saveSearchQueryByUser = function(user_id, query, location, cb)  {
//   var info = {
//     user_id: user_id,
//     query: keyword,
//     location: location
//   }
//   connection.query('INSERT INTO searches set ?', info, function(err, result) {
//     cb(null, result);
//   })
// } db.search.getResultCount(lat, lng, keyword, radius, x, callback, function(error, rows) {
//       //     //lat lng lat keyword (distance)
//
//       count = rows.length;
//       console.log(count)
//       callback(null, x);
//
//   });
