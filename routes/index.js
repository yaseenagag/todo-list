var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/users/login');
});

router.get('/index', function(req, res, next) {
  console.log(req.session.user)
  res.send(`User is logged in as: ${req.session.user}`)
})

module.exports = router;
