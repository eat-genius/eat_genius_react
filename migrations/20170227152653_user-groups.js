
exports.up = knex => knex.schema.createTable('user_groups', (table) => {
  table.increments()
  table.timestamps(true, true)
})

exports.down = knex => knex.schema.dropTable('user_groups')
