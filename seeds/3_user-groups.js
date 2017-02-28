
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_groups').insert([
      
      ])
    })
}
