const TABLE_NAME = 'accounts'

exports.up = knex => {
  return knex.schema.createTable(TABLE_NAME, t => {
    t.increments()
    t.string('accountName').notNullable().unique()
    t.string('firstName').notNullable().defaultTo('')
    t.string('lastName').notNullable().defaultTo('')
    t.string('email').notNullable().unique()
    t.text('hashedPassword').notNullable()
    t.timestamps(true, true)
  })
}

exports.down = knex => knex.schema.dropTableIfExists(TABLE_NAME)
