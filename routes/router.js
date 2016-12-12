var express = require('express')
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var async = require("async");
var waterfall = require('async/waterfall');
var series = require('async/series');
var NodeGeocoder = require('node-geocoder');
var mysql = require('mysql');
var connection = mysql.createConnection({host: 'localhost', user: 'root', password: 'bennett', database: 'bootcamphire'});
var db = require('../db');

var router = express.Router()

var options = {
    provider: 'mapquest',

    // Optional depending on the providers
    httpAdapter: 'https', // Default
    apiKey: 'LIhb6pFxB7qAlFC4Aiul9rM9i7R5BcgB', // for Mapquest, OpenCage, Google Premier
    formatter: null // 'gpx', 'string', ...
};
var geocoder = NodeGeocoder(options);

// middleware that is specific to this router
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}), function(req, res) {
    res.redirect('/');
});

router.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next();
});

router.get('/', (req, res, next) => {

    // console.log(req.user.username);

    var userLogged;
    if (req.user) {
        userLogged = true;
    } else {
        userLogged = false;
    }

    res.render('main', {
        vue: {
            data: {
              rentals: '',
              keyword: '',
              location: '',
              resource_url: '',
              pages: '',
              total: '',
              current_page: '', // required
              last_page: '',
              x: '',
              y: '',
              user_logged: userLogged
            },
            meta: {
                title: 'Page Title'
            },
            components: ['myheader', 'searchform']
        }

    });

});
router.get('/login', function(req, res) {
    console.log("reached login page");
    console.log(req.body);
    var userLogged;
    if (req.user) {
        userLogged = true;
    } else {
        userLogged = false;
    }

    res.render('login', {
        vue: {
            data: {
                user_logged: userLogged
            },
            meta: {
                title: 'Page Title'
            },
            components: ['myheader']
        }

    });

    // console.log(req.user)
    // (req, res, next);

});
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/login');
});

router.get('/search', function(req, res, next) {

    var userLogged;
    if (req.user) {
        userLogged = true;
    } else {
        userLogged = false;
    }

    var keyword = ("%" + req.query.keyword + "%")

    var filterQuery = ('where job_title like ' + keyword);
    console.log(filterQuery)

    var lat;
    var lng;
    var location = req.query.location
    var radius = req.query.radius
    if (typeof radius === 'undefined' || radius === null) {
        radius = 25; //default radius
    }
    var salary = req.query.salary
    if (typeof salary === 'undefined' || salary === null) {
        salary = null;
    }
    var type = req.query.type
    if (typeof type === 'undefined' || type === null) {
        type = null;
    } else if (typeof type !== 'undefined' || type !== null) {
        filterQuery += (' and job_title = ' + type)
        console.log(filterQuery)
    }
    var currentPage = req.query.p
    if (typeof currentPage === 'undefined' || currentPage === null) {
        currentPage = 1;
    }

    //values for DB limit x, y
    var x; //offset
    var y;
    if (currentPage == 1) {
        x = 0
        y = 25
    } else {
        y = 25 * currentPage
        x = y - 24;
    }
    console.log("x:" + x + " y:" + y)

    var count;
    var page;

    // var sqlQuery = 'SELECT *, ( 3959 * acos (cos ( radians(?) )* cos( radians( lat ) )* cos( radians( lng ) - radians(?) )+ sin ( radians(?) )* sin( radians( lat ) ))) AS distance FROM job_posting ' + filterQuery + ' HAVING distance < ? ORDER BY date_created DESC limit ?, 25'
    async.series([
        function(callback) {
            geocoder.geocode(req.query.location, function(err, res) {
                console.log("latitude: ", res[0].latitude);
                lat = res[0].latitude
                lng = res[0].longitude
                var z = [lat, lng]
                callback(null, z);
            })
        },
        function(callback) {
            connection.query('SELECT *, ( 3959 * acos (cos ( radians(?) )* cos( radians( lat ) )* cos( radians( lng ) - radians(?) )+ sin ( radians(?) )* sin( radians( lat ) ))) AS distance FROM job_posting where job_title like ? HAVING distance < ?', [
                lat,
                lng,
                lat,
                keyword,
                radius,
                x
            ], function(error, rows) {
                //     //lat lng lat keyword (distance)

                count = rows.length;
                console.log(count)
                callback(null, x);

            });
            // db.results.getResultCount(lat, lng, keyword, radius, x, cb), function(err, count) {
            //     if (err) {
            //         return cb(err);
            //     }
            //     return cb(null, count);
            // });

        }
    ], function(err, result) {
        if (type === null) {
            connection.query('SELECT *, ( 3959 * acos (cos ( radians(?) )* cos( radians( lat ) )* cos( radians( lng ) - radians(?) )+ sin ( radians(?) )* sin( radians( lat ) ))) AS distance FROM job_posting where job_title like ? HAVING distance < ? ORDER BY date_created DESC limit ?, 25', [
                lat,
                lng,
                lat,
                keyword,
                radius,
                x,
                y
            ], function(error, rows) {
                console.log(error)

                var test = rows.slice();

                if (count % 25 == 0) {
                    page = (count / 25);
                } else {
                    page = 1 + (count / 25);
                }
                var last;
                var pages = [];
                for (var i = 1; i <= page; i++) {
                    pages.push(i);
                    last = i;
                }
                console.log('loggedIn value before render ' + userLogged);

                res.render('main', {
                    data: {
                        rentals: test,
                        keyword: req.query.keyword,
                        location: location,
                        resource_url: '',
                        pages: pages,
                        total: count,
                        current_page: currentPage, // required
                        last_page: last,
                        x: x,
                        y: y,
                        user_logged: userLogged
                    },
                    vue: {
                        meta: {
                            title: 'Page Title'
                        },
                        components: [
                            'myheader',
                            'searchform',
                            'results',
                            'searchfilter',
                            'paginate'
                        ]
                    }

                });
                console.log('after render')
            });
        } else {
            console.log(type)
            connection.query('SELECT *, ( 3959 * acos (cos ( radians(?) )* cos( radians( lat ) )* cos( radians( lng ) - radians(?) )+ sin ( radians(?) )* sin( radians( lat ) ))) AS distance FROM job_posting where job_title like ? AND job_type = ? HAVING distance < ? ORDER BY date_created DESC limit ?, 25', [
                lat,
                lng,
                lat,
                keyword,
                type,
                radius,
                x,
                y
            ], function(error, rows) {
                //     //lat lng lat keyword (distance)

                console.log(error)
                var test = rows.slice();

                res.render('main', {
                    data: {
                        rentals: test,
                        items: [],
                        keyword: req.query.keyword,
                        location: location,
                        resource_url: '',
                        total: 0,
                        per_page: 12, // required
                        current_page: 1, // required
                        last_page: 10, // required
                        from: 1,
                        to: 12,
                        loggedIn: loggedIn // required
                    },

                    // paginate: ['languages'],
                    vue: {
                        meta: {
                            title: 'Page Title'
                        },
                        components: ['myheader', 'searchform', 'results', 'searchfilter']
                    }

                });
                console.log('after render')
            });
        }
    });
    console.log('running before async')
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
                components: ['myheader', 'searchform', 'results']
            }

        });

        // res.sendFile(__dirname + '/index.html')
        // console.log(result)
    });

    // res.sendFile(__dirname + '/navbar.html')
});
router.get('/post', function(req, res) {
    // console.log(req.user)
    if (req.user) {
        // logged in
        res.render('post', {
            vue: {
                meta: {
                    title: 'Page Title'
                },
                components: ['myheader']
            }

        });

    } else {
        // not logged in
        res.redirect('/login');
    }
});
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

});

router.get('/profile', function(req, res) {
    console.log(req.user.username)
    res.render('profile', {
        vue: {
            meta: {
                title: 'Page Title'
            },
            components: ['myheader']
        }

    });

});

router.get('/signup', function(req, res) {

    res.render('signup', {
        vue: {
            meta: {
                title: 'Page Title'
            },
            components: ['myheader']
        }

    });

});

module.exports = router
