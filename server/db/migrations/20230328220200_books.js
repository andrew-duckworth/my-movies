/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('books', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('publish_date')
    table.string('author_name')
    table.string('cover_image')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('books')
}
