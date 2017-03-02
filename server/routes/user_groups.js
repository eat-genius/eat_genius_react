const knex = require('../../knex')
const jwt = require('jsonwebtoken')
const boom = require('boom')
// const { camelizeKeys, decamelizeKeys } = require('humps')
const router = require('express').Router()

const auth = (req, res, next) => {
  jwt.verify(req.cookies.token, process.env.JWT_KEY, (err, payload) => {
    if (err) {
      return next(boom.create(401, 'Unauthorized'))
    }

    req.claim = payload

    next()
  })
}

router.get('/user_groups/:groupId', auth, (req, res, next) => {
  knex('user_groups')
    .where('user_id', req.claim.userId)
    .where('group_id', req.params.groupId)
    .then((response) => {
      res.send(response)
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router
