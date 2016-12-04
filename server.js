const express = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({host: 'localhost', user: 'root', password: 'bennett', database: 'bootcamphire'});
const bodyParser = require('body-parser')
var request = require('request')
var express_geocoding_api = require('express-geocoding-api')
var NodeGeocoder = require('node-geocoder')
var rp = require('request-promise');
var router = express.Router();
var expressVue = require('express-vue');
var zPagenav = require('vue-pagenav')
var Vue = require('vue')
var zPagenav = require('vue-pagenav')
var testValue = require('test-value')
var async = require("async");
var waterfall = require('async/waterfall');

// Vue.use(zPagenav)

// var vue = require('vue');

const app = express();
var options = {
    provider: 'mapquest',

    // Optional depending on the providers
    httpAdapter: 'https', // Default
    apiKey: 'LIhb6pFxB7qAlFC4Aiul9rM9i7R5BcgB', // for Mapquest, OpenCage, Google Premier
    formatter: null // 'gpx', 'string', ...
};

var geocoder = NodeGeocoder(options);

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

app.set('views', __dirname + '/routes/main');

app.set('vue', {
    rootPath: __dirname + '/',
    layoutsDir: 'routes/',
    componentsDir: 'components/',
    defaultLayout: 'layout'
});

app.engine('vue', expressVue);
app.set('view engine', 'vue');

// router.use(function(req, res, next) {
//
//     // log each request to the console
//     console.log(req.method, req.url);
//
//     // continue doing what we were doing and go to the route
//     next();
// });

app.route('/login')

// show the form (GET http://localhost:8080/login)
    .get(function(req, res) {
    res.send('this is the login form');
})

// process the form (POST http://localhost:8080/login)
    .post(function(req, res) {
    console.log('processing');
    res.send('processing the login form!');
});

app.listen(3000, function() {
    console.log('listening on 3000')
});

router.get('/', (req, res, next) => {
    res.render('main', {
        vue: {
            meta: {
                title: 'Page Title'
            },
            components: ['myheader', 'myfooter', 'searchform']
        }

    });
    // res.sendFile(__dirname + '/index.html')

})

// router.get('/search', function(req, res, next) {
//     // res.send('hello ' + req.query.keyword + '!');
//     // connection.query('select * from job_posting where job_title like ?', req.query.keyword , function(err, result) {
//
//     // console.log(req.query)
//
//     var options = {
//         provider: 'mapquest',
//
//         // Optional depending on the providers
//         httpAdapter: 'https', // Default
//         apiKey: 'LIhb6pFxB7qAlFC4Aiul9rM9i7R5BcgB', // for Mapquest, OpenCage, Google Premier
//         formatter: null // 'gpx', 'string', ...
//     };
//
//     var geocoder = NodeGeocoder(options);
//
//
//
//     var geo = geocoder.geocode(req.query.location, function(err, res) {
//       console.log(res[0].latitude);
//       var lat = res[0].latitude
//       var lng = res[0].longitude
//       return [lat, lng]
//     });
//
//     // var lat = geo[0]
//     // var lng = geo[1]
//
//     var keyword = ("%" + req.query.keyword + "%")
//     var lat = req.query.lat
//     var lng = req.query.lng
//     var location = req.query.location
//     var radius = req.query.radius
//     if (typeof radius === 'undefined' || radius === null) {
//         radius = 25;
//     }
//     console.log(radius)
//     var salary = req.query.salary
//     if (typeof salary === 'undefined' || salary === null) {
//         salary = null;
//     }
//
//     console.log(keyword, lat, lng, salary)
//
//     connection.query('SELECT *, ( 3959 * acos (cos ( radians(?) )* cos( radians( lat ) )* cos( radians( lng ) - radians(?) )+ sin ( radians(?) )* sin( radians( lat ) ))) AS distance FROM job_posting where job_title like ? HAVING distance < ?', [
//         lat, lng, lat, keyword, radius
//     ], function(error, rows) {
//         //     //lat lng lat keyword (distance)
//
//         // console.log(rows)
//         var test = rows.slice();
//         console.log("Results count before filter", test.length)
//         // console.log(test[0].salary)
//
//         test = test.filter(function(x) {
//             // console.log(x.salary)
//             // x.salary = nu/ll
//             return parseInt(x.salary) >= salary;
//         });
//         console.log("Results count after filter", test.length)
//
//         // rows.filter(where({ salary: over }))
//         res.render('main', {
//             data: {
//                 rentals: test,
//                 page: 1, //page
//                 pageSize: 10, //pageSize,  default is 10
//                 total: rows.length, //total item count
//                 maxLink: 5,
//                 keyword: req.query.keyword,
//                 location: location
//             },
//             vue: {
//                 meta: {
//                     title: 'Page Title'
//                 },
//                 components: ['myheader', 'myfooter', 'searchform', 'results', 'searchfilter']
//             }
//
//         });
//
//     })
//     // next();
//
//     // res.sendFile(__dirname + '/results.html')
//     // console.log(data)
// })

router.get('/search', function(req, res, next) {

    var keyword = ("%" + req.query.keyword + "%")
    var lat;
    var lng;
    var location = req.query.location
    var radius = req.query.radius
    if (typeof radius === 'undefined' || radius === null) {
        radius = 25;
    }
    console.log(radius)
    var salary = req.query.salary
    if (typeof salary === 'undefined' || salary === null) {
        salary = null;
    }

    async.waterfall([
        function(callback, res) {
            geocoder.geocode(req.query.location, function(err, res) {
                console.log(res[0].latitude);
                lat = res[0].latitude
                lng = res[0].longitude
                var x = [lat, lng]
                callback(x, "hello");
            })

        },
        function(callback, res) {
            connection.query('SELECT *, ( 3959 * acos (cos ( radians(?) )* cos( radians( lat ) )* cos( radians( lng ) - radians(?) )+ sin ( radians(?) )* sin( radians( lat ) ))) AS distance FROM job_posting where job_title like ? HAVING distance < ?', [
                lat, lng, lat, keyword, radius
            ], function(error, rows) {
                //     //lat lng lat keyword (distance)
                console.log(res)

                console.log('in db func')
                var test = rows.slice();
                console.log("Results count before filter", test.length)
                // console.log(test[0].salary)

                test = test.filter(function(x) {
                    // console.log(x.salary)
                    // x.salary = nu/ll
                    return parseInt(x.salary) >= salary;
                });
                console.log("Results count after filter", test.length)

                // rows.filter(where({ salary: over }))
                // res.render('main', {
                //     data: {
                //         rentals: test,
                //         page: 1, //page
                //         pageSize: 10, //pageSize,  default is 10
                //         total: rows.length, //total item count
                //         maxLink: 5,
                //         keyword: req.query.keyword,
                //         location: req.query.location
                //     },
                //     vue: {
                //         meta: {
                //             title: 'Page Title'
                //         },
                //         components: ['myheader', 'myfooter', 'searchform', 'results', 'searchfilter']
                //     }
                //
                // });
            })
        }
        // callback(null, "lol");
    ], function(err, result) {
        // result now equals 'done'
        console.log(results)
    });
});

router.get('/job/:id', function(req, res) {
    var id = req.params.id
    console.log(id)

    connection.query('select * from job_posting where id = ?', id, function(err, result) {
        if (err)
            throw err;
        res.render('show', {
            data: {
                job: result,
                desc: result[0].job_desc
            },
            vue: {
                meta: {
                    title: 'Page Title'
                },
                components: ['myheader', 'myfooter', 'searchform', 'results']
            }

        });

        // res.sendFile(__dirname + '/index.html')
        // console.log(result)
    });

    // res.sendFile(__dirname + '/navbar.html')
})
router.get('/nav', function(req, res) {
    res.sendFile(__dirname + '/navbar.html')
})
router.get('/post', function(req, res) {
    res.sendFile(__dirname + '/post.html')
})
router.post('/create', function(req, res) {

    var date = new Date();
    var post = {
        job_title: req.body.jobTitle,
        job_desc: req.body.description,
        short_desc: req.body.shortDesc,
        location: req.body.location,
        job_type: req.body.jobType,
        apply_url: req.body.applyURL,
        salary: req.body.salary,
        lat: req.body.lat,
        lng: req.body.lng,
        date_created: date
    };
    connection.query('INSERT INTO job_posting SET ?', post, function(err, result) {
        if (err)
            throw err;
            // res.sendFile(__dirname + '/index.html')
        }
    );
    res.redirect("/")

})
app.use('/', router);
