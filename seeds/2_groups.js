exports.seed = function (knex) {
  return knex('groups').del()
    .then(() => {
      return knex('groups').insert([
        {
          id: 1,
          name: 'Ballard Ballers',
          location: 'Seattle',
          search: 'Mexican'
        }
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('groups_id_seq', (SELECT MAX(id) FROM groups));"
      )
    })
}
