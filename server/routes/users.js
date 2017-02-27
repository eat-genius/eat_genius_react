const knex = require('../../knex')

const bcrypt = require('bcrypt-as-promised')

const jwt = require('jsonwebtoken')

const boom = require('boom')

const { camelizeKeys, decamelizeKeys } = require('humps')

const express = require('express')

const ev = require('express-validation')

const validations = require('../validations/users')

const router = express.Router()

const app = express()

const auth = (req, res, next) => {
  jwt.verify(req.cookies.token, process.env.JWT_KEY, (err, payload) => {
    if (err) {
      return next(err)
    }

    req.claim = payload

    next()
  })
}

router.post('/users', ev(validations.post), (req, res, next) => {
  let user
  const { email, password } = req.body

  knex('users').where('email', email)
    .then(data => {
      if (data.length) {
        throw new Error('email already exists in database')
      }

      return bcrypt.hash(password, 12)
    })
    .then(hashedPassword => {
      user = { email, hashedPassword }

      return knex('users').insert(decamelizeKeys(user), '*')
    })
    .then(array => {
      delete user.hashedPassword

      const claim = { userId: array[0].id }
      const token = jwt.sign(claim, process.env.JWT_KEY, {
        expiresIn: '120 days'
      })

      res.cookie('token', token, {
        httpOnly: true,
        expiresIn: new Date(Date.now() + 3600000 * 24 * 120),
        secure: router.get('env') === 'Production'
      }).send(user)
    })
    .catch(err => next(err))
})

module.exports = router
