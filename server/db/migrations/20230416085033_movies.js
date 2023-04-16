exports.up = function (knex) {
  return knex.schema.createTable('movies', (table) => {
    table.increments('id').primary()
    table.string('imdb_id')
    table.string('title')
    table.string('image')
    table.integer('rating')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('movies')
}
