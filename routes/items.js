var express = require('express');
var router = express.Router();
var Task = require('../database/db.js').Task

/* GET items list page. */
router.get('/', function(req, res, next) {
  Task.all().then(tasks => {
    res.render('items', { title: 'Items', items: tasks });
  })
});

module.exports = router;
