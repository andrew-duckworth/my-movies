exports.up = (knex) => {
  return knex.schema.createTable('Albums', (table) => {
    table.increments().primary()
    table.string('name')
    table.string('year')
    table.string('image')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('Albums')
}
