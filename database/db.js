const pgp = require('pg-promise')()
const db = pgp({database: 'coot'})

const findById = 'SELECT email, id FROM users WHERE id=$1'

const findByEmailAndPassword = 'SELECT email, id FROM users WHERE email=$1 AND password=$2 '

const createUser = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *'

const createTab = 'INSERT INTO tabs (title, user_id) VALUES ($1, $2) RETURNING *'

const createTask = 'INSERT INTO tasks (title) VALUES ($1) RETURNING *'
const createTaskWithTab = 'INSERT INTO tasks (title, tab_id) VALUES ($1, $2) RETURNING *'

// const allTasks = 'SELECT t.id as tabs_id, t.title, i.* FROM tabs t JOIN tasks i ON i.tab_id=t.id WHERE t.user_id=$1'
const allTasks = 'SELECT * FROM tasks ORDER BY id'
const getTaskById = 'SELECT *FROM tasks WHERE id=$1'

const allTabsForUser = 'SELECT * FROM tabs WHERE user_id=$1'

const completeTask = 'UPDATE tasks SET completed = true WHERE id=$1'
const uncompleteTask = 'UPDATE tasks SET completed = false WHERE id=$1'

const updateTask = 'UPDATE tasks SET title=$2, description=$3 WHERE id=$1'

const deleteTab = 'DELETE FROM tabs WHERE id=$1'
const deleteTabTasks = 'DELETE FROM tasks WHERE tab_id=$1'
const deleteTask = 'DELETE FROM tasks WHERE id=$1'

const User = {
  create: (email, password) => {
    return db.one( createUser, [ email, password ])
  },
  find: id => db.any( findById, [id]),
  login: (email, password) => {
    return db.any( findByEmailAndPassword, [ email, password ])
  },
  tabs: id => Tab.all( id ),
  tasks: id => db.any( allTasks, [id] )
}

const Tab = {
  create: (id, title) => {
    return db.one( createTab, [title, id] )
  },
  all: id => db.any( allTabsForUser, [id] ),
  delete: id => Promise.all([
    db.any( deleteTab, [id] ),
    db.any( deleteTabTasks, [id] )
  ])
}

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
  moveUp: (tab_id, rank) => db.any( moveUp, [tab_id, rank]),
  moveDown: (tab_id, rank) => db.any( moveDown, [tab_id, rank]),
  setRank: (id, rank) => db.any( setRank, [rank, id]),
  completeTask: (task_id) => {
    return db.one( completeTask, [task_id] )
  },
  uncompleteTask: (task_id) => {
    return db.one( uncompleteTask, [task_id] )
  },
  delete: id => db.any( deleteTask, [id] )
}

module.exports = {
  User, Task, Tab
}
