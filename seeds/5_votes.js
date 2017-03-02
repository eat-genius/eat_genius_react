exports.seed = function (knex) {
  return knex('votes').del()
    .then(() => {
      return knex('votes').insert([
        {
          id: 1,
          restaurant_id: 1,
          user_group_id: 1,
          acceptance: false
        },
        {
          id: 2,
          restaurant_id: 1,
          user_group_id: 2,
          acceptance: false
        },
        {
          id: 3,
          restaurant_id: 1,
          user_group_id: 3,
          acceptance: false
        },
        {
          id: 4,
          restaurant_id: 1,
          user_group_id: 4,
          acceptance: false
        },
        {
          id: 5,
          restaurant_id: 1,
          user_group_id: 5,
          acceptance: false
        },
        {
          id: 6,
          restaurant_id: 1,
          user_group_id: 6,
          acceptance: false
        },
        {
          id: 7,
          restaurant_id: 2,
          user_group_id: 1,
          acceptance: false
        },
        {
          id: 8,
          restaurant_id: 2,
          user_group_id: 2,
          acceptance: false
        },
        {
          id: 9,
          restaurant_id: 2,
          user_group_id: 3,
          acceptance: false
        },
        {
          id: 10,
          restaurant_id: 2,
          user_group_id: 4,
          acceptance: false
        },
        {
          id: 11,
          restaurant_id: 2,
          user_group_id: 5,
          acceptance: false
        },
        {
          id: 12,
          restaurant_id: 2,
          user_group_id: 6,
          acceptance: true
        },
        {
          id: 13,
          restaurant_id: 3,
          user_group_id: 1,
          acceptance: false
        },
        {
          id: 14,
          restaurant_id: 3,
          user_group_id: 2,
          acceptance: false
        },
        {
          id: 15,
          restaurant_id: 3,
          user_group_id: 3,
          acceptance: false
        },
        {
          id: 16,
          restaurant_id: 3,
          user_group_id: 4,
          acceptance: false
        },
        {
          id: 17,
          restaurant_id: 3,
          user_group_id: 5,
          acceptance: true
        },
        {
          id: 18,
          restaurant_id: 3,
          user_group_id: 6,
          acceptance: true
        },
        {
          id: 19,
          restaurant_id: 4,
          user_group_id: 1,
          acceptance: false
        },
        {
          id: 20,
          restaurant_id: 4,
          user_group_id: 2,
          acceptance: false
        },
        {
          id: 21,
          restaurant_id: 4,
          user_group_id: 3,
          acceptance: false
        },
        {
          id: 22,
          restaurant_id: 4,
          user_group_id: 4,
          acceptance: true
        },
        {
          id: 23,
          restaurant_id: 4,
          user_group_id: 5,
          acceptance: true
        },
        {
          id: 24,
          restaurant_id: 4,
          user_group_id: 6,
          acceptance: true
        },
        {
          id: 25,
          restaurant_id: 5,
          user_group_id: 1,
          acceptance: false
        },
        {
          id: 26,
          restaurant_id: 5,
          user_group_id: 2,
          acceptance: false
        },
        {
          id: 27,
          restaurant_id: 5,
          user_group_id: 3,
          acceptance: true
        },
        {
          id: 28,
          restaurant_id: 5,
          user_group_id: 4,
          acceptance: true
        },
        {
          id: 29,
          restaurant_id: 5,
          user_group_id: 5,
          acceptance: true
        },
        {
          id: 30,
          restaurant_id: 5,
          user_group_id: 6,
          acceptance: true
        },
        {
          id: 31,
          restaurant_id: 6,
          user_group_id: 1,
          acceptance: false
        },
        {
          id: 32,
          restaurant_id: 6,
          user_group_id: 2,
          acceptance: true
        },
        {
          id: 33,
          restaurant_id: 6,
          user_group_id: 3,
          acceptance: true
        },
        {
          id: 34,
          restaurant_id: 6,
          user_group_id: 4,
          acceptance: true
        },
        {
          id: 35,
          restaurant_id: 6,
          user_group_id: 5,
          acceptance: true
        },
        {
          id: 36,
          restaurant_id: 6,
          user_group_id: 6,
          acceptance: true
        },
        {
          id: 37,
          restaurant_id: 7,
          user_group_id: 1,
          acceptance: true
        },
        {
          id: 38,
          restaurant_id: 7,
          user_group_id: 2,
          acceptance: true
        },
        {
          id: 39,
          restaurant_id: 7,
          user_group_id: 3,
          acceptance: true
        },
        {
          id: 40,
          restaurant_id: 7,
          user_group_id: 4,
          acceptance: true
        },
        {
          id: 41,
          restaurant_id: 7,
          user_group_id: 5,
          acceptance: true
        },
        {
          id: 42,
          restaurant_id: 7,
          user_group_id: 6,
          acceptance: true
        },
        {
          id: 43,
          restaurant_id: 8,
          user_group_id: 1,
          acceptance: true
        },
        {
          id: 44,
          restaurant_id: 8,
          user_group_id: 2,
          acceptance: true
        },
        {
          id: 45,
          restaurant_id: 8,
          user_group_id: 3,
          acceptance: false
        },
        {
          id: 46,
          restaurant_id: 8,
          user_group_id: 4,
          acceptance: true
        },
        {
          id: 47,
          restaurant_id: 8,
          user_group_id: 5,
          acceptance: true
        },
        {
          id: 48,
          restaurant_id: 9,
          user_group_id: 1,
          acceptance: true
        },
        {
          id: 49,
          restaurant_id: 9,
          user_group_id: 2,
          acceptance: true
        },
        {
          id: 50,
          restaurant_id: 9,
          user_group_id: 3,
          acceptance: true
        },
        {
          id: 51,
          restaurant_id: 9,
          user_group_id: 4,
          acceptance: false
        },
        {
          id: 52,
          restaurant_id: 10,
          user_group_id: 1,
          acceptance: true
        },
        {
          id: 53,
          restaurant_id: 10,
          user_group_id: 2,
          acceptance: true
        },
        {
          id: 54,
          restaurant_id: 10,
          user_group_id: 3,
          acceptance: true
        },
        {
          id: 55,
          restaurant_id: 11,
          user_group_id: 1,
          acceptance: true
        },
        {
          id: 56,
          restaurant_id: 11,
          user_group_id: 2,
          acceptance: true
        },
        {
          id: 57,
          restaurant_id: 12,
          user_group_id: 1,
          acceptance: true
        }
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('votes_id_seq', (SELECT MAX(id) FROM votes));"
      )
    })
}
