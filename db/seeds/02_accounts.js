const TABLE_NAME = 'accounts'

exports.seed = knex => {
  return knex(TABLE_NAME).insert([
    {
      id: 1,
      firstName: 'Katrina',
      lastName: 'Agustin',
      email: 'test@me.com',
      password: '$2b$10$3OaRYsjX4tvuBBP9MzVbxeeS7w1CCRXFLxVnURS/KyLxZNJhew/US'
    }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
  })
}
