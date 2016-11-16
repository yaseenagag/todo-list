const express = require('express')
const router = express.Router()
const User = require('../database/db').User
const passport = require('../authentication/passport').passport

const loginRedirects = {
  successRedirect: '/',
  failureRedirect: '/users/login'
}

router.get( '/register', (req, res, next) => {
  res.render('register')
})

router.post( '/register', (req, res) => {
  const { email, password } = req.body

  User.create( email, password )
    .then( user => {
      req.login( user, error => {
        if( error ) {
          return next( error )
        }

        res.redirect('/')
      })
    })
})

router.get( '/login', (req, res, next) => {
  res.render('login', { user: req.user})
})

router.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  req.session.user = email
  console.log(req.session.user)
  User.login(email, password).then( user => {
    if(user !== null) {
      res.redirect('../../index')
    }
    else {
      res.redirect('/login')
    }
  }
  )
})

router.get( '/logout', (request, response) => {
  request.logout()
  response.redirect( '/' )
})

module.exports = router;
