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

// this grabs all the users from one group
router.get('/group/users/:id', auth, (req, res, next) => {
  knex('user_groups')
    .select('users.id', 'users.first_name', 'users.last_name', 'users.profile_photo_url')
    .innerJoin('users', 'users.id', 'user_groups.user_id')
    .where('user_groups.group_id', req.params.id)
    .then((users) => {
      res.send(users)
    })
    .catch((err) => {
      next(err)
    })
})

// this grabs all the groups for one user
router.get('/groups/user', auth, (req, res, next) => {
  knex('user_groups')
    .select('groups.id', 'groups.name', 'groups.location', 'groups.search')
    .innerJoin('groups', 'groups.id', 'user_groups.group_id')
    .where('user_groups.user_id', req.claim.userId)
    .then((groups) => {
      res.send(groups)
    })
    .catch((err) => {
      next(err)
    })
})

router.post('/groups', auth, (req, res, next) => {
  let groupId
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
      groupId = userGroup[0].group_id
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
      res.send([groupId])
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router
