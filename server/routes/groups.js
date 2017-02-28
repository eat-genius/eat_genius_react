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

router.get('/groups/user', auth, (req, res, next) => {
  knex('user_groups')
    .select('groups.id', 'groups.name')
    .innerJoin('groups', 'groups.id', 'user_groups.group_id')
    .where('user_groups.user_id', req.claim.userId)
    .then((groups) => {
      console.log(groups)
      res.send(groups)
    })
    .catch((err) => {
      console.log('err')
      next(err)
    })
})

router.post('/groups', auth, (req, res, next) => {
  const { name, location, search, people } = req.body

  knex('groups')
    .insert({ name, location, search }, '*')
    .then((group) => {
      return knex('user_groups')
        .insert({
          user_id: req.claim.userId,
          group_id: group[0].id
        }, '*')
    })
    .then((userGroup) => {
      const promises = []
      for (const member of people) {
        promises.push(
          knex('user_groups')
            .insert({
              user_id: member.id,
              group_id: userGroup[0].group_id
            })
        )
      }
      return Promise.all(promises)
    })
    .then((response) => {
      res.send('It was Successful!')
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router
