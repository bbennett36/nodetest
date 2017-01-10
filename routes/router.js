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
var isAuthenticated = require('./authenticate');
var uploadPath = ('/home/brennan/_repos/nodetest/uploads/')
var path = require('path');
var multer = require('multer')
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, uploadPath)
    },
    filename: function(req, file, cb) {
        //Need to make username not come from form
        cb(null, req.body.username + "_" + file.originalname)
    }
})

var upload = multer({storage: storage});

var nodemailer = require('nodemailer');

// /home/brennan/_repos/nodetest/uploads

var router = express.Router()

var options = {
    provider: 'mapquest',

    // Optional depending on the providers
    httpAdapter: 'https', // Default
    apiKey: 'LIhb6pFxB7qAlFC4Aiul9rM9i7R5BcgB', // for Mapquest, OpenCage, Google Premier
    formatter: null // 'gpx', 'string', ...
};
var geocoder = NodeGeocoder(options);

function handleSayHello(req, res) {
    // var user = res.locals.user
    console.log('in email send function, user:' + req.user)
    var userResumePath = (uploadPath + req.user.id + "_" + req.user.file_name);
    // Not the movie transporter!
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'bennettglob@gmail.com', // Your email id
            pass: 'bennett36' // Your password
        }
    });
    var text = 'Hello world';

    var mailOptions = {
        from: 'bennettglob@gmail.com', // sender address
        to: 'bennett.brennan@outlook.com', // list of receivers
        subject: 'Email Example',
        attachments: [
            { // file on disk as an attachment
                filename: req.user.file_name,
                path: userResumePath // stream this file
            }
        ], // Subject line
        text: text //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            // res.json({yo: 'error'});
        } else {
            console.log('Message sent: ' + info.response);
            // res.json({yo: info.response});
        };
    });
}

router.put('/user/:id',  upload.single("file"), function(req, res) {
    console.log(req.params.id)

    connection.query('UPDATE user SET email = ?, f_name = ?, l_name = ?, city = ?, state = ?, zip = ?, bootcamp_attended = ?, file_name where id = ?', [
        req.body.email,
        req.body.f_name,
        req.body.l_name,
        req.body.city,
        req.body.state,
        req.body.zip,
        req.body.bootcamp_attended,
        req.body.req.file.originalname,
        req.body.id
    ], function(err, result) {
        if (err)
            throw err;
        console.log("User: " + req.body.id + " update successful");
    });
})

router.post('/apply', handleSayHello); // handle the route at yourdomain.com/sayHello

// middleware that is specific to this router
router.post('/login', passport.authenticate('company-local', {
    successRedirect: '/',
    failureRedirect: '/login'
}), function(req, res) {
    res.redirect('/');
});

router.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    var userLogged = isAuthenticated(req)

    res.locals.user = userLogged;

    console.log(res.locals.user)

    // continue doing what we were doing and go to the route
    next();
});

router.get('/', (req, res, next) => {

    // console.log("test" + req.user.type);

    res.render('home', {
        data: {
            user_logged: res.locals.user
            // user_type: req.user.type
        },
        vue: {
            meta: {
                title: 'Page Title'
            },
            components: ['myheader', 'searchform']
        }

    });

});
router.get('/login', function(req, res) {

    res.render('login', {
        vue: {
            data: {
                user_logged: res.locals.user
            },
            meta: {
                title: 'Page Title'
            },
            components: ['myheader']
        }

    });

});
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/login');
});


router.get('/job/:id', function(req, res) {
    var id = req.params.id
    console.log(id)
    var user_file_name;
    if (res.locals.user == true) {
        console.log(req.user)
        user_file_name = req.user.file_name
    }

    connection.query('select * from job_posting where id = ?', id, function(err, result) {
        if (err)
            throw err;
        res.render('show', {
            data: {
                job: result,
                desc: result[0].job_desc,
                user_logged: res.locals.user,
                user_file_name: user_file_name
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
            data: {
                user_logged: res.locals.user
            },
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
    console.log(req.body.applyType)

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
        date_created: date,
        apply_type: req.body.applyType
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
    console.log(req.user.id)
    var dbUser;
    if(req.user.type == "user") {
    db.users.findById(req.user.id, function(err, user) {
        if (err)
            throw err;
        dbUser = user[0];
        console.log('user:' + user.username + dbUser)

        res.render('profile', {
            data: {
                user: user,
                user_logged: res.locals.user
            },
            vue: {
                meta: {
                    title: 'Page Title'
                },
                components: ['myheader']
            }
        });
        console.log('after render')

    });
  } else if (req.user.type == "company")  {
    db.users.findByCompanyId(req.user.id, function(err, user) {
        if (err)
            throw err;
        dbUser = user[0];
        console.log('user:' + user.username + dbUser)

        res.render('profile', {
            data: {
                user: user,
                user_logged: res.locals.user
            },
            vue: {
                meta: {
                    title: 'Page Title'
                },
                components: ['myheader']
            }
        });
        console.log('after render')

    });
  }

});

router.get('/signup', function(req, res) {

    res.render('signup', {
        data: {
            user_logged: res.locals.user
        },
        vue: {
            meta: {
                title: 'Page Title'
            },
            components: ['myheader']
        }

    });

});

router.get('/csignup', function(req, res) {

    res.render('companysignup', {
        data: {
            user_logged: res.locals.user
        },
        vue: {
            meta: {
                title: 'Page Title'
            },
            components: ['myheader']
        }

    });

});

router.post('/signup', upload.single("file"), function(req, res) {
    console.log("file:" + req.file.originalname);

    var user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        bootcamp_attended: req.body.bootcamp_attended,
        file_name: req.file.originalname
    };
    connection.query('INSERT INTO user SET ?', user, function(err, result) {
        if (err)
            throw err;
        res.redirect('/login');
    });

});

router.post('/c_signup', function(req, res) {

    var user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        location: req.body.location,
        job_title: req.body.job_title
    };

    connection.query('INSERT INTO company SET ?', user, function(err, result) {
        if (err)
            throw err;
        res.redirect('/login');
    });

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

                res.render('main', {
                    data: {
                        results: test,
                        keyword: req.query.keyword,
                        location: location,
                        resource_url: '',
                        pages: pages,
                        total: count,
                        current_page: currentPage, // required
                        last_page: last,
                        x: x + 1,
                        y: y,
                        user_logged: res.locals.user
                    },
                    vue: {
                        meta: {
                            title: 'Page Title'
                        },
                        components: ['myheader', 'searchform', 'results', 'searchfilter', 'paginate']
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
                        user_logged: res.locals.user
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


module.exports = router
