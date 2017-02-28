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

router.post('/groups', (req, res, next) => {
  const { name, location, search, people } = req.body

  knex('groups')
    .insert({ name, location, search }, '*')
    .then((group) => {
      return knex('user_groups')
        .insert({
          user_id: req.claim.id,
          group_id: group.id
        }, '*')
    })
    .then((userGroup) => {
      const promises = []
      for (const member of people) {
        promises.push(
          knex('user_groups')
            .insert({
              user_id: member.id,
              group_id: userGroup.group_id
            })
        )
      }
      return Promise.all(promises)
    })
    .then((response) => {
      console.log(response)
      res.send('It was Successful!')
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router
