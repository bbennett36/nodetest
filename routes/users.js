var mysql = require('mysql');
var connection = mysql.createConnection({host: 'localhost', user: 'root', password: 'bennett', database: 'bootcamphire', dateStrings: 'date'});
var db = require('../db');

module.exports = {
    profile : function(req, res){
      console.log(req.user.id)
      if (res.locals.type == "user") {
          db.users.findById(req.user.id, function(err, user) {
              if (err)
                  throw err;

              res.render('profile', {
                  data: {
                      user: user,
                      user_logged: res.locals.user,
                      user_type: res.locals.type
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
    },
    searches : function(req, res){
       //do something
    },
    applied : function(req, res){

          var user_type = req.user.type
          if (typeof user_type === 'undefined' || user_type === null) {
              user_type = null;
          }

          db.users.findAppliedJobs(req.user.id, function(error, rows) {
              res.render('applied', {
                  data: {
                      applied: rows,
                      user_logged: res.locals.user,
                      user_type: res.locals.type
                  },
                  vue: {
                      meta: {
                          title: 'Page Title',
                          head: [
                              {
                                  script: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js'
                              }
                          ]
                      },
                      components: ['myheader']
                  }
              });
          });

    }
}
