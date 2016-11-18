const pgp = require('pg-promise')()
const db = pgp({database: 'coot'})

const createTask = 'INSERT INTO tasks (title) VALUES ($1) RETURNING *'

const allTasks = 'SELECT * FROM tasks ORDER BY id'
const getTaskById = 'SELECT *FROM tasks WHERE id=$1'

const completeTask = 'UPDATE tasks SET completed = true WHERE id=$1'
const uncompleteTask = 'UPDATE tasks SET completed = false WHERE id=$1'

const updateTask = 'UPDATE tasks SET title=$2, description=$3 WHERE id=$1'

const deleteTask = 'DELETE FROM tasks WHERE id=$1'

const saveOrder = 'UPDATE orders SET order_array=$1 WHERE id=1'
const retrieveOrder = 'SELECT order_array FROM orders WHERE id=1'

const Task = {
  all: () => {
    return db.any( allTasks )
  },
  create: (title) => {
    return db.one( createTask, [title])
  },
  oneTask: (task_id) => {
    return db.one( getTaskById, [task_id])
  },
  update: (task_id, title, description) => {
    return db.none( updateTask, [task_id, title, description] )
  },
  completeTask: (task_id) => {
    return db.none( completeTask, [task_id] )
  },
  uncompleteTask: (task_id) => {
    return db.none( uncompleteTask, [task_id] )
  },
  delete: id => db.any( deleteTask, [id] )
}

const Orders = {
  save: (array) => {
    return db.none( saveOrder, [array])
  },
  retrieve: () => {
    return db.one( retrieveOrder )
  }
}

module.exports = {
  Task, Orders
}
