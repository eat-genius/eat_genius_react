exports.up = knex => knex.schema.createTable('user_groups', (table) => {
  table.increments()
  table.integer('user_id')
    .notNullable()
    .references('users.id')
    .onDelete('CASCADE')
  table.integer('group_id')
    .notNullable()
    .references('groups.id')
    .onDelete('CASCADE')
  table.timestamps(true, true)
})

exports.down = knex => knex.schema.dropTable('user_groups')
