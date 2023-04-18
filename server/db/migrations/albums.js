exports.up = (knex) => {
  return knex.schema.createTable('albums', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('year')
    table.string('image')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('albums')
}
