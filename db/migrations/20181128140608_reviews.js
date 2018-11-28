const TABLE_NAME = 'reviews'

exports.up = knex => {
  return knex.schema.createTable(TABLE_NAME, t => {
    t.increments()
    t.string('title').notNullable()
    t.float('rating', 2, 1).notNullable().defaultsTo(0)
    t.text('comment').notNullable()
    t.integer('account_id').references('accounts.id')
    t.integer('snack_id').references('snacks.id').onDelete('CASCADE')
    t.timestamps(true, true)
  })
}

exports.down = knex => knex.schema.dropTableIfExists(TABLE_NAME)
