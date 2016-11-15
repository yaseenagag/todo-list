var express = require('express');
var router = express.Router();
var Task = require('../database/db.js').Task

/* GET items list page. */
router.get('/', function(req, res, next) {
  Task.all().then(tasks => {
    res.render('items', { title: 'Items', items: tasks });
  })
});

/* POST create new item. */
router.post('/', function(req, res, next) {
  const description = req.body.description

  Task.create(description).then(() => res.redirect('/items'))
});

module.exports = router;
