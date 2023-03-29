exports.up = (knex) => {
  return knex.schema.createTable('Albums', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('year')
    table.string('image')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('Albums')
}
