const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('Hi from API!')
})

module.exports = router
