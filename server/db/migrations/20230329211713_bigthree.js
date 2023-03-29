/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('bigthree', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('sun')
    table.string('moon')
    table.string('rising')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('bigthree')
}
