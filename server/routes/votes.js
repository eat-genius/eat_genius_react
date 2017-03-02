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

// This grabs votes to add to group results
router.get('/votes/:groupId', auth, (req, res, next) => {
  knex.raw(`
    SELECT
      restaurants.id AS restaurant_id,
      yes.yes_count AS yes_votes,
      total.total_count AS total_votes
    FROM
      restaurants
      LEFT JOIN (
        SELECT
          votes.restaurant_id AS yes_id,
          COUNT(votes.id) AS yes_count
        FROM
          votes
        WHERE
          votes.acceptance = true
        GROUP BY
          votes.restaurant_id) AS yes ON yes.yes_id = restaurants.id
      LEFT JOIN (
        SELECT
          votes.restaurant_id AS total_id,
          COUNT(votes.id) AS total_count
        FROM
          votes
        GROUP BY
          votes.restaurant_id) AS total ON total.total_id = restaurants.id
    WHERE
      restaurants.group_id = ${req.params.groupId}
  `)
    .then((response) => {
      res.send(response)
    })
    .catch((err) => {
      next(err)
    })
})

router.post('/votes', auth, (req, res, next) => {
  const { restaurant_id, user_group_id, acceptance } = req.body

  knex('votes')
    .insert({ restaurant_id, user_group_id, acceptance }, '*')
    .then((response) => {
      res.send(response)
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router
