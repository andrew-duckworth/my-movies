/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('manga', (table) => {
    table.increments().primary()
    table.string('title')
    table.string('books')
    table.string('author')
    table.string('location')
    table.string('image_src')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('manga')
}
