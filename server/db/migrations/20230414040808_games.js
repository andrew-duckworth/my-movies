exports.up = (knex) => {
  return knex.schema.createTable('games', (table) => {
    table.increments().primary()
    table.string('title')
    table.string('dev')
    table.text('cover')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('games')
}
