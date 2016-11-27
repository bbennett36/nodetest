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
// var vue = require('vue');

const app = express();

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

router.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next();
});

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
        data: {
            otherData: 'Something Else'
        },
        vue: {
            meta: {
                title: 'Page Title',
                // head: [
                //     {
                //         property: 'og:title' content: 'Page Title'
                //     }, {
                //         name: 'twitter:title' content: 'Page Title'
                //     }
                // ]
            }
        }
    });
    // res.sendFile(__dirname + '/index.html')

})
// router.use('search', function(req, res, next, keyword) {
//     // do validation on name here
//     // blah blah validation
//     // log something so we know its working
//     console.log('doing name validations on ' + keyword);
//
//     // once validation is done save the new item in the req
//     req.keyword = keyword;
//     // go to the next thing
//     next();
// });

router.get('/search', function(req, res) {
    // res.send('hello ' + req.query.keyword + '!');
    // connection.query('select * from job_posting where job_title like ?', req.query.keyword , function(err, result) {

    // console.log(req.query)
    var keyword = ("%" + req.query.keyword + "%")
    var lat = req.query.lat
    var lng = req.query.lng

    console.log(keyword, lat, lng)

    connection.query('SELECT *, ( 3959 * acos (cos ( radians(?) )* cos( radians( lat ) )* cos( radians( lng ) - radians(?) )+ sin ( radians(?) )* sin( radians( lat ) ))) AS distance FROM job_posting where job_title like ? HAVING distance < 25', [
        lat, lng, lat, keyword
    ], function(error, result) {
        //     //lat lng lat keyword (distance)
        console.log(result)
        console.log(error)
    })

    res.sendFile(__dirname + '/results.html')
    // console.log(data)
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
