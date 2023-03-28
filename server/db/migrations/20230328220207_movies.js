exports.up = function (knex) {
  return knex.schema.createTable('movies', function (table) {
    table.increments('id').primary()
    table.string('title')
    table.string('director')
    table.string('movieImg')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('movies')
}
