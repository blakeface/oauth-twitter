var express = require('express');
var router = express.Router();
var passport = require('passport');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Twitter OAuth' });
});

router.get('/auth/twitter', passport.authenticate('twitter'));

router.get('/auth/twitter/callback', passport.authenticate('twitter', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.redirect('/');
});


module.exports = router;
