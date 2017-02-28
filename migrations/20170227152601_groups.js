exports.up = knex => knex.schema.createTable('groups', (table) => {
  table.increments()
  table.timestamps(true, true)
})

exports.down = knex => knex.schema.dropTable('groups')
