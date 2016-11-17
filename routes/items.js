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

router.post('/completed', function(req, res, next) {
  const id = req.body.id
  Task.completeTask(id).then(() => res.redirect('/items'))
});

router.post('/uncompleted', function(req, res, next) {
  const id = req.body.id
  Task.uncompleteTask(id).then(() => res.redirect('/items'))
});

router.get('/task_details/:id', function(req, res, next) {
  const task_id = req.params.id
  Task.oneTask(task_id).then(tasks => {
    console.log(tasks)
    res.render('task_details', { items: tasks });
  })
});

router.post('/task_details/update/:id', function(req, res, next) {
  const { id } = req.params
  const { title, description } = req.body
  console.log(req.params)
  Task.update(id, title, description).then(() => {
    res.redirect('/items');
  })
});

module.exports = router
