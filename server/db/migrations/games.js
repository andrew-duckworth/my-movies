exports.up = (knex) => {
  return knex.schema.createTable('Games', (table) => {
    table.increments().primary()
    table.string('title')
    table.string('dev')
    table.string('cover')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('Games')
}
