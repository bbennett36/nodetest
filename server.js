const express = require('express');


var router = express.Router();
var expressVue = require('express-vue');
const bodyParser = require('body-parser')
var responseTime = require('response-time')
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('./db');
var session = require('express-session')
var rout = require('./routes/router')

// var ensureLoggedIn = require('ensureLoggedIn');

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use('user-local', new Strategy(function(email, password, cb) {
    db.users.findByUsername(email, function(err, user) {
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

passport.use('company-local', new Strategy(function(email, password, cb) {
    db.users.findByCompanyUsername(email, function(err, user) {
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
    var key = {
    id: user.id,
    type: user.type
  }
  console.log(key)
    cb(null, key);
});

passport.deserializeUser(function(key, cb) {
    console.log('deserializeUser')
    console.log(key);
    if(key.type == "company") {
    db.users.findByCompanyId(key.id, function(err, user) {
        if (err) {
            return cb(err);
        }
        cb(null, user);
    });
  }
  if(key.type == "user")  {
    db.users.findById(key.id, function(err, user) {
        if (err) {
            return cb(err);
        }
        cb(null, user);
    });
  }
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

app.set('views', __dirname + '/vues');

app.set('vue', {
    rootPath: __dirname + '/',
    layoutsDir: 'vues/',
    componentsDir: 'components/',
    defaultLayout: 'layout'
});

app.engine('vue', expressVue);
app.set('view engine', 'vue');


var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});

// app.listen(3000, function() {
//     console.log('listening on 3000')
// });


app.use('/', rout);
