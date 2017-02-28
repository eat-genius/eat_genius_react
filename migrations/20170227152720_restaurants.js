exports.up = knex => knex.schema.createTable('restaurants', (table) => {
  table.increments()
  table.timestamps(true, true)
})

exports.down = knex => knex.schema.dropTable('restaurants')
