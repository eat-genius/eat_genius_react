exports.seed = function (knex) {
  return knex('user_groups').del()
    .then(() => {
      return knex('user_groups').insert([
        {
          id: 1,
          user_id: 1,
          group_id: 1
        },
        {
          id: 2,
          user_id: 2,
          group_id: 1
        },
        {
          id: 3,
          user_id: 3,
          group_id: 1
        },
        {
          id: 4,
          user_id: 4,
          group_id: 1
        },
        {
          id: 5,
          user_id: 5,
          group_id: 1
        },
        {
          id: 6,
          user_id: 6,
          group_id: 1
        }
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('user_groups_id_seq', (SELECT MAX(id) FROM user_groups));"
      )
    })
}
