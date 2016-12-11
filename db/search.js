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
      callback(null, count);

  });
}
