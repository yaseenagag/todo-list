var express = require('express');
var router = express.Router();
var Task = require('../database/db.js').Task

/* GET items list page. */
router.get('/', function(req, res, next) {
  Task.all().then(tasks => {
    res.render('items', { title: 'Items', items: tasks});
  })
});

/* POST create new item. */
router.post('/', function(req, res, next) {
  const title = req.body.title

  Task.create(title).then(() => res.redirect('/items'))
});

router.post('/delete', function(req, res, next) {
  const id = req.body.id
  Task.delete(id).then(() => res.redirect('/items'))
});

// router.post('/completed', function(req, res, next) {
//   const id = req.body.id
//   Task.completeTask(id).then(() => res.redirect('/items'))
// });

module.exports = router
