const TABLE_NAME = 'reviews'

exports.seed = knex => {
  return knex(TABLE_NAME).insert([
    {
      id: 1,
      title: 'Corn Dog of the Millenials',
      rating: 5,
      comment: 'I mean... yes... it is just like corn dog!',
      account_id: 1,
      snack_id: 5
    }
  ])
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
}
