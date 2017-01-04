module.exports = function isAuthenticated(req, res, userLogged) {

    // do any checks you want to in here

    // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
    // you can do this however you want with whatever variables you set up
    var userLogged;
    if (req.user) {
        userLogged = true;
        console.log(req.user)
    } else {
        userLogged = false;
    }
    return userLogged;

    // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
    // res.redirect('/');
}
