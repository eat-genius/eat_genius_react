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

router.get('/restaurants/:groupId', auth, (req, res, next) => {
  knex('restaurants')
    .where('group_id', req.params.groupId)
    .then((restaurants) => {
      res.send(restaurants)
    })
    .catch((err) => {
      next(err)
    })
})

router.post('/restaurants', auth, (req, res, next) => {
  const { restaurants } = req.body
  const promises = []

  for (const restaurant of restaurants) {
    const { name, img_url, rating, description, address, city, state_code, postal_code, yelp_id, group_id } = restaurant
    promises.push(
      knex('restaurants')
        .insert({ name, img_url, rating, description, address, city, state_code, postal_code, yelp_id, group_id }, '*')
    )
  }

  Promise.all(promises)
    .then((response) => {
      res.send(response)
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router
