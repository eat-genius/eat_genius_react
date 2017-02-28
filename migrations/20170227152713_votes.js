exports.up = knex => knex.schema.createTable('votes', (table) => {
  table.increments()
  table.timestamps(true, true)
})

exports.down = knex => knex.schema.dropTable('votes')
