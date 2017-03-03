const router = require('express').Router()
const Yelp = require('yelp')

const yelp = new Yelp({
  consumer_key: 'hSoA-h_BmJSHiibeQa55Dw',
  consumer_secret: '0tklnXKk5kONbtMTa5M-reIBTsg',
  token: 'SDoCKtRE6vi2GJRY60e9rRvS-0C2vjJ1',
  token_secret: 'jbX-8TIwuBRk_jr49cWuXP0cmfs'
})

router.post('/yelp', (req, res, next) => {
  const restaurants = []
  const { search, groupLoc } = req.body
  yelp.search({ term: `${search}`, location: `${groupLoc}` })
  .then(function (data) {
    const promises = []
    for (const place of data.businesses) {
      promises.push(
        yelp.business(place.id)
      )
    }

    return Promise.all(promises)
  })
  .then((data) => {
    for (const place of data) {
      const tempObj = {
        name: place.name,
        img_url: place.image_url,
        rating: place.rating,
        description: place.snippet_text,
        address: place.location.address[0],
        city: place.location.city,
        state_code: place.location.state_code,
        postal_code: place.location.postal_code,
        url: place.url,
        yelp_id: place.id
      }
      restaurants.push(tempObj)
    }

    res.send(restaurants)
  })
  .catch(() => {
    res.send([])
  })
})

module.exports = router
