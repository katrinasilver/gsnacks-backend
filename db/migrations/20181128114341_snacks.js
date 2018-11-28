const TABLE_NAME = 'snacks'

exports.up = knex => {
  return knex.schema.createTable(TABLE_NAME, t => {
    t.increments()
    t.string('name').notNullable().defaultTo('')
    t.text('description').notNullable().defaultTo('')
    t.text('img').notNullable().defaultTo('')
    t.float('price').notNullable().defaultsTo(0)
    t.boolean('isPerishable').notNullable().defaultTo(false)
    t.timestamps(true, true)
  })
}

exports.down = knex => knex.schema.dropTableIfExists(TABLE_NAME)
