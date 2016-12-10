const express = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({host: 'localhost', user: 'root', password: 'bennett', database: 'bootcamphire'});
const bodyParser = require('body-parser')
var NodeGeocoder = require('node-geocoder')
var router = express.Router();
var expressVue = require('express-vue');
var async = require("async");
var waterfall = require('async/waterfall');
var series = require('async/series');
var responseTime = require('response-time')
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('./db');
var session = require('express-session')
// var ensureLoggedIn = require('ensureLoggedIn');

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use(new Strategy(function(username, password, cb) {
    db.users.findByUsername(username, function(err, user) {
        if (err) {
            return cb(err);
        }
        if (!user) {
            return cb(null, false);
        }
        if (user.password != password) {
            return cb(null, false);
        }
        return cb(null, user);
    });

}));

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function(user, cb) {
    console.log("serializeUser")
    cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
    console.log('deserializeUser')
    db.users.findById(id, function(err, user) {
        if (err) {
            return cb(err);
        }
        cb(null, user);
    });
});

const app = express();

// app.use(responseTime())

app.use(require('cookie-parser')());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()) // parse application/json
app.use(require('express-session')({
    secret: 'keyboard cat',
    cookie: {
        maxAge: 300000
    },
    resave: true,
    saveUninitialized: true
}));
app.use(express.static('public'))
app.use(passport.initialize());
app.use(passport.session());

app.set('views', __dirname + '/routes/main');

app.set('vue', {
    rootPath: __dirname + '/',
    layoutsDir: 'routes/',
    componentsDir: 'components/',
    defaultLayout: 'layout'
});

app.engine('vue', expressVue);
app.set('view engine', 'vue');

var options = {
    provider: 'mapquest',

    // Optional depending on the providers
    httpAdapter: 'https', // Default
    apiKey: 'LIhb6pFxB7qAlFC4Aiul9rM9i7R5BcgB', // for Mapquest, OpenCage, Google Premier
    formatter: null // 'gpx', 'string', ...
};
var geocoder = NodeGeocoder(options);

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

app.listen(3000, function() {
    console.log('listening on 3000')
});

router.get('/', (req, res, next) => {


        console.log(req.user.username);


    res.render('main', {
        vue: {
            meta: {
                title: 'Page Title'
            },
            components: ['myheader', 'myfooter', 'searchform']
        }

    });

});
router.get('/login', function(req, res) {
    console.log("reached login page");
    console.log(req.body);
    res.sendFile(__dirname + '/login.html')

    console.log(req.user)
    // (req, res, next);

});
// router.post('/login', function(req, res) {
//     console.log(req.user)
//     // passport.authenticate('local', { successRedirect: '/post', failureRedirect: '/login'}),
//     console.log(req.user)
//     // res.redirect("/profile")
// });
router.get('/profile', require('connect-ensure-login').ensureLoggedIn(), function(req, res) {
    console.log(req.user.username)
    console.log(req.session.user)
    res.render('main', {
        vue: {
            meta: {
                title: 'Page Title'
            },
            components: ['myheader', 'myfooter', 'searchform']
        }

    });

    // res.render('profile', {user: req.user});
});

router.get('/search', function(req, res, next) {

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
        }
    ], function(err, result) {
        // var yoyo = true;
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
                //     //lat lng lat keyword (distance)
                console.log(error)

                var test = rows.slice();

                // var count = test.length();

                // int page;
                //

                if (count % 25 == 0) {
                    page = (count / 25);
                } else {
                    page = 1 + (count / 25);
                }
                //
                //         List<Integer> pages = new ArrayList();
                //         for (int i = 1; i <= page; i++) {
                //             pages.add(i);
                //         }
                var last;
                var pages = [];
                for (var i = 1; i <= page; i++) {
                    pages.push(i);
                    last = i;
                }

                // rows.filter(where({ salary: over }))
                res.render('main', {
                    data: {
                        rentals: test,
                        keyword: req.query.keyword,
                        location: location,
                        resource_url: '',
                        pages: pages,
                        total: count,
                        // per_page: 12, // required
                        current_page: currentPage, // required
                        last_page: last,
                        x: x,
                        y: y // required
                        // from: 1,
                        // to: 12 // required
                    },
                    // paginate: ['languages'],
                    vue: {
                        meta: {
                            title: 'Page Title'
                        },
                        components: [
                            'myheader',
                            'myfooter',
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
                // console.log("Results count before filter", test.length)
                //
                // test = test.filter(function(x) {
                //     if (type === null) {
                //         return parseInt(x.salary) >= salary
                //     } else if (type !== null) {
                //         return x.job_type === type;
                //     }
                // });
                //
                // console.log("Results count after filter", test.length)

                // rows.filter(where({ salary: over }))
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
                        to: 12 // required
                    },

                    // paginate: ['languages'],
                    vue: {
                        meta: {
                            title: 'Page Title'
                        },
                        components: ['myheader', 'myfooter', 'searchform', 'results', 'searchfilter']
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
                components: ['myheader', 'myfooter', 'searchform', 'results']
            }

        });

        // res.sendFile(__dirname + '/index.html')
        // console.log(result)
    });

    // res.sendFile(__dirname + '/navbar.html')
});
router.get('/nav', function(req, res) {
    res.sendFile(__dirname + '/navbar.html')
});
router.get('/post', function(req, res) {
    console.log(req.user)
    if (req.user) {
        // logged in
        res.sendFile(__dirname + '/post.html')

    } else {
        // not logged in
        res.sendFile(__dirname + '/login.html')
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
app.use('/', router);
