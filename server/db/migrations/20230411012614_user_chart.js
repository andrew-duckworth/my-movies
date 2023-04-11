/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('user_chart', function (table) {
    table.increments('id').primary()
    table.integer('user_id')
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
  return knex.schema.dropTable('user_chart')
}
