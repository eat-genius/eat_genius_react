
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('groups').del()
}
