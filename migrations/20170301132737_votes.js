exports.up = knex => knex.schema.createTable('votes', (table) => {
  table.increments()
  table.integer('restaurant_id')
    .references('restaurants.id')
    .onDelete('CASCADE')
  table.integer('user_group_id')
    .references('user_groups.id')
    .onDelete('CASCADE')
  table.boolean('acceptance').notNullable().defaultTo(false)
  table.timestamps()
})

exports.down = knex => knex.schema.dropTable('votes')
