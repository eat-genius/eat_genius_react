exports.up = knex => knex.schema.createTable('groups', (table) => {
  table.increments()
  table.string('name').notNullable().defaultTo('')
  table.string('location').notNullable().defaultTo('Seattle')
  table.string('search')
  table.timestamps(true, true)
})

exports.down = knex => knex.schema.dropTable('groups')
