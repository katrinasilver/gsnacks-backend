exports.seed = knex => {
  return knex('snacks').del()
    .then(() => knex('accounts').del())
    .then(() => knex('reviews').del())
}
