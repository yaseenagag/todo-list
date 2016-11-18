const express = require('express');
const router = express.Router();
const Task = require('../database/db.js').Task;
const Orders = require('../database/db.js').Orders;

/* GET items list page. */
router.get('/', function(req, res, next) {
  // Promise.all([Task.all(),
  //   Orders.retrieve()]).then(results => {
  //     const tasks = results[0]
  //     const orders = results[1].order_array
  //     const items = []
  //   orders.forEach( ord => { }
  //   for(var i = 0 ; i < tasks.length; i++) {
  //
  //   }

  Task.all().then( results => {
    res.render('items', { title: 'Items', items: results});
  })
});

/* POST create new item. */
router.post('/', function(req, res, next) {
  const title = req.body.title

  Task.create(title).then(() => res.redirect('/items'))
});

router.post('/task_details/delete/:id', function(req, res, next) {
  const id = req.params.id
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

router.post('/sorted', function(req, res, next) {
  const dataArray = req.body['data[]']
  const data = `{${dataArray}0}`
  Orders.save(data).then(() => res.redirect('/items'))
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
